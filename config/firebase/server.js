import admin from "firebase-admin";

const app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp({
      credential: admin.credential.cert({
        type: "service_account",
        project_id: "clocker-lucas",
        private_key_id: "2af65b07de9cb46cc023cbc22435d11927235d05",
        private_key:
          "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDJkpJ+tMm0MwXG\n0af1PKsH8kJOfGMh5/zHUsPNkUsvZKu451egUeTzX6HN5jvoR75nS+33spUEielJ\nMb2WNH31hKEMwhZs+OkSLQFz7BGj3slllwUz9JMCxKRpTunv+TmlsdBjTwu94Kly\n0TAdt6bqx5UKl2551FmXAf+FGlLx/0/P3bgvuOtQyDse97Zjf19SreUbzItXtlOo\nTW2NhUsQckM7V7UUVefiiEJh720ONWHGCYUleinkJLI034JpjL4IDsd1D7qhfZy5\neLRXTKNFDen4AuIisQrI9kb5tGCALn1ufeRwkGoJ1yFGji3HBpJCvKSZmcvN6EF5\nIiAHJz+7AgMBAAECggEAFg8YQQ1/1VyQEUX4X3oYLXJxly09nARLQXTpQKHZ3IHj\n2QRYLo9HwuqARowfmjffumYw0J6WeDyvbvcmjD2KW0f8Z+0Fjz9eIkMSmaEH/Srw\nV1HDm//z5qWmaG/eYgigKmXfLD8GRe1EHfCOl3H1rlPRF6uix2pZs5DgaayLzzez\nstxyUSZwxyhDdaDLnzlW3AXfSvYiR9OrXGiAYE1kdITQy2ggxkeW14fjm+BltseN\n2cQ/7oxMZXkuLoMV9dN+EI9LvNeneJjY5L/Thjh/1KPamav9JRCIllaJJcRjXqxR\nhij/8YksI3DN26fYgGh3ugoa5CH+4YnuMwepEY8zQQKBgQDwrDrfo4RZSMaPEELI\nYtI4WVikk+NL5e5G9ownFQ3zjoKFzbRRlZBqtyT3CoMTBSdGLXDA7ggSYRZRIGlw\nFwy2/Ky4+8Z+uoYKjLf+AWN2DvJvt6AmUPQn244PnP3B5Aq/2CgbBofSxfYKCtUK\naPh4aU5RSfEBmmN3qM4x6sQGgwKBgQDWaODE7h+n9kPT0yjSBH8/DgJ3L1aSL3aN\nehOhP5Peytm0kXFEbTJjW7Ejg9Oqcs7VuxLsYUVwr0LKde7YLeWwYG4KCvDX8vLy\n68NqTg6nY2EJi64FBsqIu3deeO2w6z/cVrWD7w/0nqbvGK6RJ3q/8+wURDSarEeL\n0Gd8s7jcaQKBgDyX4Cq2DHg+Ll+OhIHW/35YYEzvPua4+Qi8wgSE9IJBevMdGyz/\nLuDvQ0s/Rkjfn0e34Q9x3m5iKzA5rNIfu3/GleXs3cjCRUUasKguyU/L65Xc8WE0\nOIRgbp/XsrvCIkKytUY4mrGiTZOxrnl0fDo0qRcmOptgt3JE+cTvinLpAoGBAIAS\nl6iqgLhIrw1ZxbllvEiC6tAcs76QoWUy9YTNQFvFmbN1aU4xV/bnr3ECbq4S9B/R\nJiWSmPMNjXz4Yxo4mEn53+EZ1fF4isy2Lb1TMQelojIcgG86NkLkkBIbdAfJDhVk\nqfpME6DQH/EUMjo8deMxJeSZNT7rB7WpYBeqFxN5AoGBAKwwd+i2QvR4b/EpZLf/\nunNICsdr74NRZ7V6gIAwzpOyM/Dy6v4srQDIlgZpybqwWU5o25BHRk0l6vHTbpuI\nT6FkaxLdtWpqmEXwChU0KKqaMDjpKVMNmrcnJKM4EUZ0zSZZDEfIrsPsW8P1DZRy\nPOBb452JoI4XTZyphmGbICHO\n-----END PRIVATE KEY-----\n",
        client_email:
          "firebase-adminsdk-1if9n@clocker-lucas.iam.gserviceaccount.com",
        client_id: "102892564882400979171",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url:
          "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url:
          "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-1if9n%40clocker-lucas.iam.gserviceaccount.com",
      }),
    });

export default admin;
