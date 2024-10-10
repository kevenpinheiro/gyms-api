import { VerifyJwt } from '@/http/middlewares/verify-jwt'
import { authenticateUser } from './authenticate'
import { profile } from './profile'
import { registerUser } from './register'
import type { FastifyInstance } from 'fastify'
import { refreshToken } from './refresh'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', registerUser)
  app.post('/session', authenticateUser)

  app.patch('/token/refresh', refreshToken)

  // authenticated
  app.get('/me', { onRequest: [VerifyJwt] }, profile)
}
