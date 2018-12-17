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

const getTestimonials = () => new Promise( resolve => {

  const testimonalsPath = './public/content/testimonials';
  let testimonials = [];

  if ( fs.existsSync( testimonalsPath )) {
    klaw( testimonalsPath )
    .on( 'data', file => {
      if ( path.extname( file.path ) === '.json' ) {
        const data = JSON.parse( fs.readFileSync( file.path, 'utf8' ));
        testimonials.push( data );
      }
    })
  }
  resolve( testimonials );
});

const getCMSData = ( cmsPath ) => new Promise( resolve => {

  let cmsData = [];

  if ( fs.existsSync( cmsPath )) {
    klaw( cmsPath )
    .on( 'data', file => {
      if ( path.extname( file.path ) === '.json' ) {
        const data = JSON.parse( fs.readFileSync( file.path, 'utf8' ));
        cmsData.push( data );
      }
    })
  }

  resolve( cmsData );
});


export default {

  getSiteData: () => ({
    title: 'Amour En Action',
  }),
  getRoutes: async () => {
    
    const pagesData = await getPagesData();
    const testimonials = await getCMSData( './public/content/testimonials' );
    const journalEntries = await getCMSData( './public/content/journal' );

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
        getData: () => ({
          journalEntries: journalEntries,
        }) 
      },
      {
        path: '/testimonials',
        component: 'src/pages/Testimonials/Testimonials',
        getData: () => ({
          testimonials
        })
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
        <link href="https://fonts.googleapis.com/css?family=PT+Serif:700i|Source+Sans+Pro:400,600" rel="stylesheet" />
        <script src="netlify-login.js"></script>
      </Head>
      <Body>{children}</Body>
    </Html>
  )
}
