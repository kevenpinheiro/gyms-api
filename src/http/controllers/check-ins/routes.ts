import { VerifyJwt } from '@/http/middlewares/verify-jwt'
import type { FastifyInstance } from 'fastify'
import { validate } from './validate'
import { history } from './history'
import { metrics } from './metrics'
import { verifyUserRole } from '@/http/middlewares/verify-user-role'
import { create } from './create'

export async function checkInsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', VerifyJwt)

  app.get('/check-ins/history', history)
  app.get('/check-ins/metrics', metrics)

  app.post('/gyms/:gymId/check-ins', create)

  app.patch(
    '/check-ins/:checkInId/validate',
    { onRequest: [verifyUserRole('ADMIN')] },
    validate,
  )
}
