var _hmt = _hmt || [];
(function() {
  try {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?2031426ed0c247c3e9a533c0ce347d17";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  } catch (error) {
    console.log(error);
  }

 try {
  Meteor.startup(function(){
    Tracker.autorun(function() {
      FlowRouter.watchPathChange();
      if (FlowRouter.current().path) {
        window._hmt.push(['_trackPageview', FlowRouter.current().path]);
      }
    });
  })
 } catch (error) {
  console.log(error);
 }
})();