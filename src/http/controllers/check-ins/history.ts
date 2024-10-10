import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeFetchUserCheckInsHistoryUseCase } from '@/use-cases/factories/make-fetch-user-check-ins-history-use-case'

export async function history(request: FastifyRequest, replay: FastifyReply) {
  const checkInHistoryParamsSchema = z.object({
    page: z.coerce.number().min(1).default(1),
  })

  const { page } = checkInHistoryParamsSchema.parse(request.query)

  const fetchCheckInHistoryUseCase = makeFetchUserCheckInsHistoryUseCase()

  const { checkIns } = await fetchCheckInHistoryUseCase.execute({
    userId: request.user.sub,
    page,
  })

  return replay.status(200).send({
    checkIns,
  })
}
