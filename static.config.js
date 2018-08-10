import React from 'react'
import axios from 'axios'
import fs from 'fs';
import path from 'path';
import klaw from 'klaw';


const getPagesData = () => new Promise( resolve => {

  const pagesPath = './public/content/pages';
  let pagesData = {};

  if ( fs.existsSync( pagesPath )) {
    klaw( pagesPath )
    .on( 'data', file => {
      if ( path.extname( file.path ) === '.json' ) {
        const data = JSON.parse( fs.readFileSync( file.path, 'utf8' ));
        pagesData[ data.title ] = data;
      }
    })
  }

  resolve( pagesData );

});


export default {

  getSiteData: () => ({
    title: 'Amour En Action',
  }),
  getRoutes: async () => {
    
    const pagesData = await getPagesData();

    return [
      {
        path: '/',
        component: 'src/pages/Home/Home',
        getData: () => ({
          pageData: pagesData.home,
        })
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
        path: '/take-action',
        component: 'src/pages/TakeAction/TakeAction',
      },
      {
        path: '/contact',
        component: 'src/pages/Contact/Contact',
      },
      {
        is404: true,
        component: 'src/pages/404/404',
      },
    ]
  },
  Document: ({ Html, Head, Body, children }) => (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="normalize.css" />
        <script src="netlify-login.js"></script>
      </Head>
      <Body>{children}</Body>
    </Html>
  )
}
