$(document).ready(function() {

  window.URL = window.URL || window.webkitURL;

  var tPath = {
    slick:'public/uploads/170804',
    skew:'public/skin/images',
    allimg:'public/uploads/allimg/170804'
  };

  $.get("getImgs",{
    typePath:tPath.slick
  },function(data,status){
    if (data.success) {
      var imgs = [];
      for (var i = 0, L = data.msg.length; i < L; i++) {
        var t = [
          '<div class="img-wrap">',
            '<img src="../uploads/170804/'+ data.msg[i] +'" class="img-rounded img-size">',
            '<div class="form-group">',
                '<button name="fileSelect" class="btn btn-small" type="button">选择图片</button>&nbsp;&nbsp;',
                '<button name="fileReplace" class="btn btn-small btn-primary" type="button">替换</button>',
                '<input id="slick'+i+'" name="fileSlick" data='+ data.msg[i] +' type="file" style="display:none;">',
            '</div>',
          '</div>'
        ];
        imgs.push(t.join(''));
      }
      $('.slick-wrap').append(imgs);

      //触发选择图片模态弹出框
      $(".slick-wrap [name=fileSelect]").on('click',function(event){
        var fileInput = $(event.target).next().next();
        fileInput.click();
      });
      //选择图片，可预览
      // var fileEls = $(".slick-wrap [name=fileSlick]");
      // for (var i = 0,L = fileEls.length; i < L; i++) {
      //   $(fileEls[i]).on('change',function(event){
      //     if (!event.target.files.length) {
      //       console.log(event.target);
      //     } else {
      //       console.log(event.target.files[0]);
      //       $(event.target)
      //       .parents('div.img-wrap')
      //       .children('img')
      //       .attr('src',window.URL.createObjectURL(event.target.files[0]))
      //       .on("load",function(){
      //         window.URL.revokeObjectURL(this.src);
      //         $(event.target).prev().show();
      //       })
      //     }
      //   });
      // }
      $(".slick-wrap [name=fileSlick]").on('change',function(event){
        if (!event.target.files.length) {
          console.log(event.target);
        } else {
          console.log(event.target.files[0]);
          $(event.target)
          .parents('div.img-wrap')
          .children('img')
          .attr('src',window.URL.createObjectURL(event.target.files[0]))
          .on("load",function(){
            window.URL.revokeObjectURL(this.src);
            $(event.target).prev().show();
          })
        }
      });
      //替换图片
      $(".slick-wrap [name=fileReplace]").on('click',function(event){
        var fileInput = $(event.target).next();
        if (fileInput[0].files.length === 0) {
          alert('请先选择图片！');
          return;
        }
        $.ajaxFileUpload({
          url:'upload',
          data:{
            'imgUrl':'public/uploads/170804/',
            'imgName':fileInput.attr('data')
          },
          fileElementId:fileInput.attr('id'),
          dataType: 'json',
          contentType: "application/x-www-form-urlencoded; charset=utf-8",
          success: function (data) {
            if (data.success) {
              $(event.target).hide();
            }else{
              alert(data.msg);
            }
          }
        });
      });
    }else{
      alert(data.msg);
    }

  });
//-----------------------------------Skew-----------------------------------
$.get("getImgs",{
  typePath:tPath.skew
},function(data,status){
  if (data.success) {
    var imgs = [];
    for (var i = 0, L = data.msg.length; i < L; i++) {
      var t = [
        '<div class="img-wrap">',
          '<img src="../skin/images/'+ data.msg[i] +'" class="img-rounded img-size">',
          '<h4>'+ data.msg[i] +'</h4>',
          '<div class="form-group">',
              '<button name="fileSelect" class="btn btn-small" type="button">选择图片</button>&nbsp;&nbsp;',
              '<button name="fileReplace" class="btn btn-small btn-primary" type="button">替换</button>',
              '<input id="skew'+i+'" name="fileSlick" data='+ data.msg[i] +' type="file" style="display:none;">',
          '</div>',
        '</div>'
      ];
      imgs.push(t.join(''));
    }
    $('.skew-wrap').append(imgs);

    //触发选择图片模态弹出框
    $(".skew-wrap [name=fileSelect]").on('click',function(event){
      var fileInput = $(event.target).next().next();
      fileInput.click();
    });
    $(".skew-wrap [name=fileSlick]").on('change',function(event){
      if (!event.target.files.length) {
        console.log(event.target);
      } else {
        console.log(event.target.files[0]);
        $(event.target)
        .parents('div.img-wrap')
        .children('img')
        .attr('src',window.URL.createObjectURL(event.target.files[0]))
        .on("load",function(){
          window.URL.revokeObjectURL(this.src);
          $(event.target).prev().show();
        })
      }
    });
    //替换图片
    $(".skew-wrap [name=fileReplace]").on('click',function(event){
      var fileInput = $(event.target).next();
      if (fileInput[0].files.length === 0) {
        alert('请先选择图片！');
        return;
      }
      $.ajaxFileUpload({
        url:'upload',
        data:{
          'imgUrl':'public/skin/images/',
          'imgName':fileInput.attr('data')
        },
        fileElementId:fileInput.attr('id'),
        dataType: 'json',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success: function (data) {
          if (data.success) {
            $(event.target).hide();
          }else{
            alert(data.msg);
          }
        }
      });
    });
  }else{
    alert(data.msg);
  }

});
//-----------------------------------Allimg-----------------------------------
$.get("getImgs",{
  typePath:tPath.allimg
},function(data,status){
  if (data.success) {
    var imgs = [];
    for (var i = 0, L = data.msg.length; i < L; i++) {
      var t = [
        '<div class="img-wrap">',
          '<img src="../uploads/allimg/170804/'+ data.msg[i] +'" class="img-rounded img-size">',
          '<h4>'+ data.msg[i] +'</h4>',
          '<div class="form-group">',
              '<button name="fileSelect" class="btn btn-small" type="button">选择图片</button>&nbsp;&nbsp;',
              '<button name="fileReplace" class="btn btn-small btn-primary" type="button">替换</button>',
              '<input id="allimg'+i+'" name="fileSlick" data='+ data.msg[i] +' type="file" style="display:none;">',
          '</div>',
        '</div>'
      ];
      imgs.push(t.join(''));
    }
    $('.allimg-wrap').append(imgs);

    //触发选择图片模态弹出框
    $(".allimg-wrap [name=fileSelect]").on('click',function(event){
      var fileInput = $(event.target).next().next();
      fileInput.click();
    });
    $(".allimg-wrap [name=fileSlick]").on('change',function(event){
      if (!event.target.files.length) {
        console.log(event.target);
      } else {
        console.log(event.target.files[0]);
        $(event.target)
        .parents('div.img-wrap')
        .children('img')
        .attr('src',window.URL.createObjectURL(event.target.files[0]))
        .on("load",function(){
          window.URL.revokeObjectURL(this.src);
          $(event.target).prev().show();
        })
      }
    });
    //替换图片
    $(".allimg-wrap [name=fileReplace]").on('click',function(event){
      var fileInput = $(event.target).next();
      if (fileInput[0].files.length === 0) {
        alert('请先选择图片！');
        return;
      }
      $.ajaxFileUpload({
        url:'upload',
        data:{
          'imgUrl':'public/uploads/allimg/170804/',
          'imgName':fileInput.attr('data')
        },
        fileElementId:fileInput.attr('id'),
        dataType: 'json',
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        success: function (data) {
          if (data.success) {
            $(event.target).hide();
          }else{
            alert(data.msg);
          }
        }
      });
    });
  }else{
    alert(data.msg);
  }

});









});
