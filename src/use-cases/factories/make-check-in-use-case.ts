import { CheckInUseCase } from '../check-in'
import { PrismaGymsRepository } from '@/repositories/prisma-repo/prisma-gyms-repository'
import { PrismaCheckInsRepository } from '@/repositories/prisma-repo/prisma-check-ins-repository'

export function makeCheckInsUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const gymsRepository = new PrismaGymsRepository()

  const useCase = new CheckInUseCase(checkInsRepository, gymsRepository)

  return useCase
}
