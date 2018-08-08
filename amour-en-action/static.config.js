import axios from 'axios'

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return [
      {
        path: '/',
        component: 'src/pages/Home/Home',
      },
      {
        path: '/about',
        component: 'src/pages/About/About',
      },
      {
        path: '/journal',
        component: 'src/pages/Journal/Journal',
      },
      {
        path: '/testimonials',
        component: 'src/pages/Testimonials/Testimonials',
      },
      {
        path: '/get-involved',
        component: 'src/pages/GetInvolved/GetInvolved',
      },
      {
        path: '/contact',
        component: 'src/pages/Contact/Contact',
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/pages/404/404',
      },
    ]
  },
}
