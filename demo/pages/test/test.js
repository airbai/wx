Page( {
    data: {
        hidden: true
    },
    onReady: function() {
        var self = this;
        self.setData( {
            hidden: false
        });
        wx.request( {
            url: 'http://m.jiajuol.com/api/subject/subject_list.php',
            data: {
                page:2,
                limit:10,
                house_type:0,
                house_style:0,
                house_area:0
            },
            header: {
                'Content-Type': 'application/json'
            },
            success: function( res ) {
                console.log( res.data );
                self.setData( {
                    hidden: true,
                    data:res.data
                });
            }
        })
    }
})