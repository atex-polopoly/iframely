export default {

    lowestPriority: true,

    getMeta: function(meta, url, whitelistRecord) {

        if (meta.og && /video|movie/i.test(meta.og.type)
            || meta.video_src || meta.video_type
            || meta.medium === 'video') {
            
            return {
                medium: 'video'
            }           
        }

        var has_thumbnail = (meta.og && meta.og.image) || (meta.twitter && meta.twitter.image);

        if (has_thumbnail && meta.og) {

            if (!/\/(?:videos?|media|player|embed)\//i.test(url) && !/https?:\/\/videos?\./i.test(url)
                && (/article|blog|news|post|noticia/i.test(url) 
                    || (/\/(\d{4})\/(\d{2})\/(\d{2})/).test(url) 
                    || /article|post/i.test(meta.og.type) && !media.ld
                    || (
                        meta.og.video 
                        && whitelistRecord.isDefault 
                        && whitelistRecord.isAllowed 
                        && whitelistRecord.isAllowed('og.video') 
                        && (typeof meta.og.type !== 'string' 
                            || !/video/.test(meta.og.type))
                        )
                    )
                ) {
                
                return {
                    medium: 'article'
                }
            }
        }
    }
};