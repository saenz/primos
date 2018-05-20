
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default ({ title }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
      <link rel='shortcut icon' href='/static/favicon.ico' />
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm' crossOrigin='anonymous' />
      {/*
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossOrigin="anonymous" />
                <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css" />
                <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
                <link rel="stylesheet" href="/static/base.css" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
                */}
    </Head>
    <style jsx global>{`
        /* loading progress bar styles */
        #nprogress {
            pointer-events: none;
        }
        #nprogress .bar {
            background: #ff9300;
            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
        }
        #nprogress .peg {
            display: block;
            position: absolute;
            right: 0px;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px #ff9300, 0 0 5px #ff9300;
            opacity: 1.0;
            transform: rotate(3deg) translate(0px, -4px);
        }
    `}</style>
  </div>
)
