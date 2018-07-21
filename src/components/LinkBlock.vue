<template>
  <div id="links-wrapper center">
      <div class="row test">
      <div class="col-sm-6 no-padding" style="background-color: #3071a9;">
        <a class="button button-giant button-block button-primary" id="link-faqs" href="/faqs">
          <i class="glyphicon glyphicon-question-sign" aria-hidden="true"></i>
           常见问题<span class="hidden-sm"> | <small>FAQ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small></span>
        </a>
      </div>
      <div class="col-sm-6 no-padding" style="background-color: #d9534f;">
        <a class="button button-giant button-block button-caution" id="link-order-create" href="/user/order/create">
          <i class="glyphicon glyphicon-bell" aria-hidden="true"></i>
          网络报修<span class="hidden-sm"> | <small>REPAIR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small></span>
        </a>
      </div>
      <div class="col-sm-6 no-padding" style="background-color: #ec971f;">
        <a class="button button-giant button-block button-highlight" id="link-follow-us" href="" data-toggle="modal" data-target="#follow-us">
          <i class="glyphicon glyphicon-heart" aria-hidden="true"></i>
          关注我们<span class="hidden-sm"> | <small>FOLLOW US</small></span>
        </a>
      </div>
      <div class="col-sm-6 no-padding" style="background-color: #7b72e9;">
        <a class="button button-giant button-block button-royal" id="link-join-us" href="/join-us">
          <i class="glyphicon glyphicon-user" aria-hidden="true"></i>
          加入我们<span class="hidden-sm"> | <small>JOIN US&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small></span>
        </a>
      </div>
      <div class="col-sm-12 text-left">
        <h3>加入我们</h3>
            <hr>
            <p>西安交通大学学生网络管理协会（西交网管会），成立于2014年初。于2016-2017年度获评为校甲级社团。</p>
            <p>西交网管会是由西安交大网络信息中心指导的科技类社团组织。
                社团以建设安全、文明、稳定的校园学生网络为宗旨，负责学生区宿舍网络的维护和管理、
                宿舍网络设备的维护监控以及宿舍网络的故障排除。</p>
            <p>社团下设运维部、研发部、宣传部三大部门，横跨兴庆、雁塔两大校区，包含从本科到硕士研究生共95名社员。</p>
            <br>
            <h3>部门介绍</h3>
            <hr>
            <h4>运维部</h4>
            <p>运维部是社团的中流砥柱，构建起社团与同学间的沟通桥梁，支撑起社团的网络管理职能。</p>
            <p>运维部设有3个分部：运维一部、运维二部、运维三部，分别负责兴庆校区东半区（含教学二区）、
                兴庆校区西半区、雁塔校区（含二附院）的学生区网络运行维护工作。</p>
            <p>在这里，我们有学校网络中心的官方系统培训，也有前辈成员的悉心经验指导。</p>
            <p>在这里，我们掌握网络基本原理和基础知识，了解校园网络设备分布与配置，领略网络运维工作的奥秘与魅力。</p>
            <p>在这里，我们学习如何排查故障，如何解决各种网络问题，从电脑小白蜕变为帮助同学排忧解难的出色网管。</p>
            <br>
            <h4>研发部</h4>
            <p>研发部是社团的技术核心，开发社团网站，完善各项功能，维护社团服务器，为社团提供技术支持。</p>
            <p>这里有技术大牛，也有菜鸟萌新，但都有一颗热爱技术的心。</p>
            <p>学技术绝不只是说说而已，不花时间去码代码、去实践、去思考、去遇到问题、去解决问题，永远不会进步，永远只是小白。</p>
            <p>打酱油永远无法真正成为研发部的一员，无论起点高低，只有肯努力，肯下功夫，才能融入我们的研发团队。</p>
            <br>
            <h4>宣传部</h4>
            <p>宣传部是社团的形象设计师，是对外交流的窗口，展现网管会的社团风采。</p>
            <p>审美是我们的基本功，PS、AI、CD只是基本工具，表情包、斗图大战完全不在话下。</p>
            <p>运营微信公众号，提供社团的新媒体支持，为同学们提供投诉渠道，解答疑难问题。</p>
            <p>发布通知，文案构思，逗比小编一抓一大把。</p>
            <p>设计海报，宣传活动，“这次活动来多少人就看你们了。”</p>
            <p>有灵感，更有实现灵感的执行力；有脑洞，更有展现脑洞的大舞台。</p>
            <br>
            <h3>社团成就</h3>
            <hr>
            <h4>网络维护</h4>
            <p>网管会义务帮助同学们解决校园网络问题。</p>
            <p>我校同学通过本网站的网络报修功能进行网络报修，网管会将由专门的网管同学进行联络，排除故障，解决难题。</p>
            <p>截止时间：2018年06月28日 20:07:39</p>
            <p>已处理报修数：4191</p>
            <br>
            <h4>系统重装活动</h4>
            <p>网管会不定期举办系统重装活动，帮助同学们重装系统、更新系统，是电脑小白的福音。</p>
            <p>最新活动时间可关注我们的微信平台发布的通知。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinkBlock'
}
</script>

<style scoped>
.test {
    margin: auto;
    border:1px solid rgb(133, 133, 133);
    box-shadow: 5px 0px 5px 0px darkgrey,-5px 0px 5px 0px darkgrey;
}
a {
  font-size: 32px;
  color: white;
  padding: 0px 20px;
  height: 80px;
  line-height: 80px;
}

@media (min-width: 768px){
  .test{
    width: 740px;
  }
}

@media (min-width: 992px){
  .test{
    width: 960px;
  }
}

@media (min-width: 1200px){
  .test{
    width: 1160px;
  }
}
</style>
