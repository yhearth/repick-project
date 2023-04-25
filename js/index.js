(function($){
    $(document).ready(function(){


        const $window = $(window);
        const body = $('body');
        let wonsize = {width:null,height:null}
        let scrollY = null;
        let winHeight = window.innerHeight;

        //bg - 업사이클 이란? 

        //새로운 가치 움직임
        const $newValue = document.querySelector('.newValue');
        let newValueTop = $newValue.offsetTop;
        let newValueVt = newValueTop - winHeight;
        let newValuePercent = 0;
        const newValueAni = ()=>{
            newValuePercent = (scrollY - newValueVt) / winHeight * 100;
           // console.log(newValuePercent)
            if( 260 <= newValuePercent){
                $newValue.classList.add('active'); 
            }
            if(matchMedia("screen and (max-width : 1024px)").matches){
                if( 220 <= newValuePercent){
                    $newValue.classList.add('active');     
                }
            }  
            
        }

        //이미지 마우스 오버 
         var bgUpcycImg = $('.bg-area .upcycing .img-box img');
         bgUpcycImg.mouseover(function(){
            if($(this).hasClass('on')){
                $(this).siblings().removeClass('on')
            }else{
                $(this).addClass('on').siblings().removeClass('on')
            }
         })

         //bg - ceo
         const  $bgCeo = document.querySelector('.bg-ceo');
         const  $bgCeoSpan = document.querySelector('.bg-ceo .txt-box .txt-ani span');
         let bgCeoTop = $bgCeo.offsetTop;
         let bgCeoViewt = bgCeoTop - winHeight;
         let bgCeoPercent = 0;
         const bgCeoReWalk = ()=>{
            bgCeoPercent = (scrollY - bgCeoViewt) / winHeight * 100;
            //console.log(bgCeoPercent)
            if( 260 <= bgCeoPercent){
                $bgCeoSpan.classList.add('on')
             }
         }

        //
        ////bg - solution
         const  $bgSolution = document.querySelector('.solution-area');
         const  bgSolBox = $('.solution-area .solcyc-img');
         const  bgSolTxt = $('.solution-area .solcyc-txt');
         let bgSolTop = $bgSolution.offsetTop;
         let bgSolViewt = bgSolTop - winHeight;
         let bgSolPercent = 0;
         const bgSolAni = ()=>{
            bgSolPercent = (scrollY - bgSolViewt) / winHeight * 100;
           //console.log(bgSolPercent)
            if( 60 <= bgSolPercent){
                bgSolBox.find('img').addClass('on')
                bgSolTxt.css('opacity','1');
             }
         }
////////////////////////////////////////////////////////////
        //service-area

        //brand-value
         var bdValue = $('.service-area .brand-value');
         var bdValueImgRe = $('.service-area .brand-value .logo-re');
         var bdValueImgPick = $('.service-area .brand-value .logo-pick');
         var bdClick = $('.service-area .brand-value .click');
         var bdrandombox = $('.service-area .brand-value .txt-random');
         var bdrandomTxt = $('.service-area .brand-value .txt-random span');
         const randomVal =['life','special','creation','energy','sea'];
         let valIndex =0;

         bdClick.one('click',function(e){
            e.preventDefault();

            bdValue.css({'background-color':'#64e0e3','color':'#fff'})
            bdValueImgRe.attr('src','img/re-white.png');
            bdValueImgRe.addClass('on')
            bdValueImgPick.attr('src','img/pick!-white.png');
            bdValueImgPick.addClass('on')
            bdClick.text('가치를');
            bdClick.css('color','#fc6744')
            bdrandombox.css('opacity','1');
            setInterval(randomValFunc,700);
         })


         const randomValFunc = function(){
            if(valIndex < randomVal.length){
                let rdIndex = randomVal[valIndex]
                bdrandomTxt.text(`${rdIndex}`);
                valIndex++;
            } else if(valIndex == randomVal.length){
                valIndex = 0;
              }
         }
           //brand-logo
           const  $bgLogo = document.querySelector('.brand-logo');
           const  bgLogoIcon = $('.brand-logo .img-box .logo');
           const  bgLogoGird = $('.brand-logo .img-box .grid');
           let bgLogoTop = $bgLogo.offsetTop;
           let bgLogoViewt = bgLogoTop - winHeight;
           let bgLogoPercent = 0;

           const bgLogoImg = ()=>{
            bgLogoPercent = (scrollY - bgLogoViewt) / winHeight * 100;
             // console.log(bgLogoPercent)
              if( 900 <= bgLogoPercent){
                bgLogoIcon.css('opacity','1')
                bgLogoGird.css('opacity','0')
               }
           }


          //brand-color
          const $bgColor = document.querySelector('.brand-color');
          const $bgOranBox = document.querySelector('.brand-color .orange-box');
          const $bgBlueBox = document.querySelector('.brand-color .blue-box');
          let bgColorTop = $bgColor.offsetTop;
          let bgColorViewT = bgColorTop - winHeight;
          let bgColorPer = 0;
          const bgColorAni = () =>{
            bgColorPer = (scrollY - bgColorViewT) / winHeight * 100;
            //console.log(bgColorPer)
            if(  1000 <= bgColorPer){
                $bgOranBox.classList.add('on')
                $bgBlueBox.classList.add('on')
            }
            if(matchMedia("screen and (max-width : 1024px)").matches){
                if( 850 <= bgColorPer){
                    $bgOranBox.classList.add('on')
                    $bgBlueBox.classList.add('on') 
                }
            } 
          }



         //brand-icon
         const icrandom =$('#icrandom')
         let icIndex = 1;
         const randomIconFunc =()=>{
            icrandom.attr('src',`img/meunicon0${icIndex}.svg`)
            icIndex++;
            if(icIndex == 13){
                icIndex = 1;
            }
         }
         window.onload =  setInterval(randomIconFunc,800);
         //brand-chr
         const bdChrBox = $('.brand-chr .chracter')
         bdChrBox.mouseover(function(e){
            if($(this).hasClass('chrpap')){
                $(this).find('img').css('transform','translateY(-100%)');
            }else if($(this).hasClass('chrvin')){
                $(this).find('img').css('transform','translateX(-100%)');
            }else if($(this).hasClass('chrpla')){
                $(this).find('img').css('transform','translateY(100%)');
            }else if($(this).hasClass('chrcan')){
                $(this).find('img').css('transform','translateX(100%)');
            }
         })
         bdChrBox.mouseout(function(e){
            if($(this).hasClass('chrpap')){
                $(this).find('img').css('transform','translateY(0%)');
            }else if($(this).hasClass('chrvin')){
                $(this).find('img').css('transform','translateX(0%)');
            }else if($(this).hasClass('chrpla')){
                $(this).find('img').css('transform','translateY(0%)');
            }else if($(this).hasClass('chrcan')){
                $(this).find('img').css('transform','translateX(0%)');
            }
         })
////////////////////
//app-area
        const $appOnbord = document.querySelector('.onbord-area');
        let appOnbordTop = $appOnbord.offsetTop;
        let appOnbordViewT = appOnbordTop - winHeight;
        let appOnbordPer = 0;
        const appOnbordAni = () =>{
        appOnbordPer = (scrollY - appOnbordViewT) / winHeight * 100;
        //console.log(appOnbordPer)
        if( 60 <= appOnbordPer){
            $('.onbord-Lbg').css({'left':'0','transition':'all 1s ease'})
            $('.onbord-Rbg').css({'right':'0','transition':'all 1s ease'})
          }
        }


         /// app-main-potin
         const pointClick = $('.app-area .app-main .point-view .point');
         const cashAni = $('.app-area .app-main .point-view .cash');
         pointClick.mouseover(function(){
            cashAni.addClass('on')
         })
         pointClick.mouseout(function(){
            cashAni.removeClass('on')
         })

        /// app-process

        const $slideTxt = $('.app-repickbox .process-repick .txt-box .sub p');
        const $slideTxtNum = $('.app-repickbox .process-repick .txt-box .sub span');
        const $slideWrap = $('.app-repickbox .process-repick .img-wrap');
        let x = 0;
    
        const slideRight = function(e){
           x += 100;
           $slideWrap.animate({left:`-${x}%`});
           $prevBtn.css('z-index','1')
           $slideTxtNum.text('sssss');
            if(x == 0){
                $slideTxt.text('제공된 리픽박스에 넣을 소재들을 모아보세요');
                $slideTxtNum.text('1');
            }else if(x == 100){
                $slideTxt.text('수거박스의 컬러 칸과 눈금들을 확인하고 정해진 양 만큼 소재들을 모아주세요.');
                $slideTxtNum.text('2');
            }else if(x == 200){
                $slideTxt.text('프로젝트에 제시된 가이드에 맞추어 소재를 정리해 넣어주세요.')
                $slideTxtNum.text('3');
            }else if(x == 300){
                $slideTxt.text('이제 소재를 담은 리픽박스는 저희가 수거해 갈게요!')
                $slideTxtNum.text('4');
                $nextBtn.css('z-index','-1')
            }
        }
        const slideLeft = function(e){
            x -= 100;
            $slideWrap.animate({left:`-${x}%`});
           $nextBtn.css('z-index','1')
           if(x == 0){
            $slideTxt.text('제공된 리픽박스에 넣을 소재들을 모아보세요')
            $slideTxtNum.text('1');
            $prevBtn.css('z-index','-1')
           }else if(x == 100){
               $slideTxt.text('수거박스의 컬러 칸과 눈금들을 확인하고 정해진 양 만큼 소재들을 모아주세요.')
               $slideTxtNum.text('2');
           }else if(x == 200){
               $slideTxt.text('프로젝트에 제시된 가이드에 맞추어 소재를 정리해 넣어주세요.')
               $slideTxtNum.text('3');
           }else if(x == 300){
               $slideTxt.text('이제 소재를 담은 리픽박스는 저희가 수거해 갈게요!')
               $slideTxtNum.text('4');
           }
        }
        const $prevBtn = $('.app-area .process-repick .prev')
        const $nextBtn = $('.app-area .process-repick .next')
        $prevBtn.on('click',slideLeft);
        $nextBtn.on('click',slideRight);

       //app-processIcon

        const $proIcon = document.querySelector('.process-icon');
        const proIconItem = $('.process-icon li');
        let proIconTop = $proIcon.offsetTop;
        let proIconViewT = proIconTop - winHeight;
        let proIconPer = 0;
        const proIconAni = () =>{
            proIconPer = (scrollY - proIconViewT) / winHeight * 100;
           //console.log(proIconPer)
            if( 2100 <= proIconPer){
                proIconItem.css('opacity','1');      
            }
            if(matchMedia("screen and (max-width : 1024px)").matches){
                if( 1970 <= proIconPer){
                    proIconItem.css('opacity','1');      
                }
            }   
        }


        const handleScrollWindow = () => {
        scrollY = $window.scrollTop();
        newValueAni();
        bgSolAni();
        bgCeoReWalk();
        bgLogoImg();
        bgColorAni();
        appOnbordAni();
        proIconAni();
        }
        $window.on('scroll', handleScrollWindow);  

        


        













    })

})(jQuery);