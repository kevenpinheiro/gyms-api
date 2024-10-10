import { PrismaUsersRepository } from '@/repositories/prisma-repo/prisma-users-repository'
import { RegisterUseCase } from '../register'

export function makeRegisterUseCase() {
  const prismaUserRepository = new PrismaUsersRepository()
  const registerUseCase = new RegisterUseCase(prismaUserRepository)

  return registerUseCase
}
