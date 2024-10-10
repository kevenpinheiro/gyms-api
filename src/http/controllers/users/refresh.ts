import { FastifyRequest, FastifyReply } from 'fastify'

export async function refreshToken(
  request: FastifyRequest,
  replay: FastifyReply,
) {
  await request.jwtVerify({ onlyCookie: true })

  const { role } = request.user

  const token = await replay.jwtSign(
    { role },
    {
      sign: {
        sub: request.user.sub,
      },
    },
  )

  const refreshToken = await replay.jwtSign(
    { role },
    {
      sign: {
        sub: request.user.sub,
        expiresIn: '7d',
      },
    },
  )

  return replay
    .status(200)
    .setCookie('refreshToken', refreshToken, {
      path: '/',
      secure: true,
      sameSite: true,
      httpOnly: true,
    })
    .send({
      token,
    })
}
