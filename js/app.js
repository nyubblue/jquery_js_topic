$(document).ready(
    function () {
        $('a').click(
            function (event) {
                var node = $(this);
                var target = node.attr('target');
                var href = node.attr('href');
                if (target == undefined && href != undefined) {
                    switch (true) {
                        case href.indexOf('http://') !== -1:
                        case href.indexOf('https://') !== -1:
                        case href.indexOf('.pdf') !== -1:
                            {
                                node.attr('target', '_blank').addClass('exampleLinkAutoTarget');
                                break;
                            }
                    }
                }
            }
        )
    }
);