import Router from '@koa/router'
import taskRoutes from '#components/task/task-routes.js'
import userRoutes from '#components/user/user-routes.js'

//Api pour les exemples
const API_V1_ROUTER = new Router({prefix: '/api/v1'})
API_V1_ROUTER.use('/tasks', taskRoutes.routes(), taskRoutes.allowedMethods())
API_V1_ROUTER.use('/users', userRoutes.routes(), userRoutes.allowedMethods())
export { API_V1_ROUTER }