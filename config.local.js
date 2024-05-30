export default {
    use_http2: false,

    // Customize API calls to oembed endpoints.
    // Must have: please add your `access_token` for Facebook and Instagram API calls
    ADD_OEMBED_PARAMS: [{

        re: [ // Endpoint's URL regexp array.
            /^https:\/\/graph\.facebook\.com\/v[0-9\.]+\/instagram_oembed/i
        ],
        params: { // Custom query-string params object.

            // TODO: get your access Insagtam token as described
            // on https://developers.facebook.com/docs/instagram/oembed/
            access_token: process.env.FACEBOOK_EMBED_ACCESS_TOKEN || '',   // The simplest way is
                                // to use `{app-id}|{app secret}` as access token

            // Add any other optional params
            hidecaption: true
        }
    }, {
        re: [/^https:\/\/graph\.facebook\.com\/v[0-9\.]+\/oembed_page/i],
        params: {
            // TODO: get your access token as described
            // on https://developers.facebook.com/docs/plugins/oembed
            access_token: process.env.FACEBOOK_EMBED_ACCESS_TOKEN || '',   // The simplest way is
                                // to use `{app-id}|{app secret}` as access token

            // Add any other optional params
            show_posts: 0,
            show_facepile: 0,
            maxwidth: 600
        }
    }, {
        // match i=user or i=moment or i=timeline to configure these types invidually
        // see params spec at https://dev.twitter.com/web/embedded-timelines/oembed
        re: [/^https?:\/\/publish\.twitter\.com\/oembed\?i=user/i],
        params: {
            limit: 1,
            maxwidth: 600
        }
    }, {
        // Facebook https://developers.facebook.com/docs/plugins/oembed/
        re: [/^https:\/\/graph\.facebook\.com\/v[0-9\.]+\/oembed_/i],
        params: {
            // TODO: get your access token as described
            // on https://developers.facebook.com/docs/plugins/oembed
            access_token: process.env.FACEBOOK_EMBED_ACCESS_TOKEN || '',   // The simplest way is
                                // to use `{app-id}|{app secret}` as access token

            // Add any other optional params, like skip script tag and fb-root div
            // omitscript: true
        }
    }],

    // Customize API calls to 3rd parties. At the very least - configure required keys.
    // For available provider options - please see the code of its domain plugin.
    providerOptions: {
        // List of query parameters to add to YouTube and Vimeo frames
        // Start it with leading "?". Or omit alltogether for default values
        // API key is optional, youtube will work without it too.
        // It is probably the same API key you use for Google Maps.
        youtube: {
            api_key: process.env.YOUTUBE_GDATA_API_KEY || '',
            // parts: [ "snippet", "player" ], // list of fields you want to use in the request, in most cases you only need those two
            get_params: "?rel=0&showinfo=1"     // https://developers.google.com/youtube/player_parameters
        }
    }
};
