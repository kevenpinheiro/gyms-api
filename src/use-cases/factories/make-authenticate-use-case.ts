import { PrismaUsersRepository } from '@/repositories/prisma-repo/prisma-users-repository'
import { AuthenticateUseCase } from '../authenticate'

export function makeAuthenticateUseCase() {
  const prismaUserRepository = new PrismaUsersRepository()
  const authenticateUserCase = new AuthenticateUseCase(prismaUserRepository)

  return authenticateUserCase
}
