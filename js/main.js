$(function(){

// loading-page ------------------------------------------

    gsap.set('.loading-page .text-box span',{yPercent:100})
    gsap.to('.loading-page .text-box span',{yPercent:0,stagger:0.3})
    $('body').addClass('hidden')

    setTimeout(function(){
        gsap.to('.loading-page',{
            // scale:10,
            opacity:0,
            onComplete:function(){
                $('.loading-page').remove();
            }
        })
        $('body').removeClass('hidden')
    },1800)

// nav --------------------------------------------------

    gsap.set('.group-nav .home',{yPercent:-100})
    gsap.set('.group-nav .stories',{yPercent:-200})
    gsap.set('.group-nav .about',{yPercent:-300})
    gsap.set('.group-nav .albums',{yPercent:-400})
    gsap.set('.group-nav .tips',{yPercent:-500})
    gsap.set('.group-nav .contact',{yPercent:-600})

    const menu = gsap.timeline({
        paused:true
    })
    menu.to('.group-nav',{display:'block'})
    .to('.menu-item',{yPercent:0,stagger:0.05})
   
    $('.btn-menu').click(function(e){
        e.preventDefault();
        if($(this).hasClass('active')){
            $(this).removeClass('active')
            menu.reverse();
            $('body').removeClass('hidden')
        }else{
            $(this).addClass('active')
            menu.restart();
            $('body').addClass('hidden')
        }
    });

// -----------------------------------------------------------

    gsap.set('.sc-visual .desc span',{yPercent:100})
    gsap.to('.sc-visual .desc span',1,{yPercent:0,delay:2})

    gsap.set('.wrap .word', {yPercent:100})
    gsap.to('.wrap .word',1,{yPercent:0,stagger:0.1,delay:2})

    gsap.set('.shortcut-box span',{yPercent:100})
    gsap.to('.shortcut-box span',1,{yPercent:0,stagger:0.1,delay:3})

    gsap.set('.sc-gallery .title',{opacity:0})

    $('[data-scroll]').each(function(index,item){
        start = ($(this).data('start')) ? "top" : "bottom";
        rotate = ($(this).data('rotate')) ? $(this).data('rotate') : 0;
        y = $(this).data('scroll');
        gsap.to(item,{
            scrollTrigger: {
                trigger:item,
                start: `top ${start}`,
                end: "bottom top",
                scrub: 1,
            },
            yPercent: y,
            rotation: rotate
        })
    })

    gsap.to('.sc-gallery .title',{
        scrollTrigger: {
            trigger:'.sc-gallery',
            start: `top bottom`,
            end: "bottom top",
            scrub: 1,
        },
        opacity:1,
    })

    $('[data-obj]').each(function(index,item){
        y = $(this).data('obj');
        gsap.to(item,{
            scrollTrigger: {
                trigger:item,
                start: `top bottom`,
                end: "bottom top",
                scrub: 1,
            },
            'object-position': '0px 0'
        })
    })

    gsap.set('.group-title .desc',{yPercent:-100})
    $('[data-title]').each(function(index,item){
        y = $(this).data('title');
        gsap.to(item,{
            scrollTrigger: {
                trigger:item,
                start: `top bottom`,
                end: "bottom top",
                scrub: 1,
            },
            yPercent:y,
        })
    })

    gsap.set('.sc-plan .group-title .text01',{yPercent:100})
    gsap.to('.sc-plan .group-title .title > *',{
        scrollTrigger: {
            trigger:".sc-plan .group-title",
            start: `top bottom`,
            end: "top top",
            scrub: 1,
        },
        yPercent:0,
        stagger:0.1
    })

    gsap.set('.sc-history .group-title .text02',{yPercent:100})
    gsap.to('.sc-history .group-title .title > *',{
        scrollTrigger: {
            trigger:".sc-history .group-title",
            start: `top bottom`,
            end: "top top",
            scrub: 1,
        },
        yPercent:0,
        stagger:0.1
    })

    gsap.set('.sc-plan .plan-item .num',{yPercent:-100})
    gsap.to('.sc-plan .plan-item .num',{
        scrollTrigger: {
            trigger:".sc-plan .plan-item",
            start: `top bottom`,
            end: "60% top",
            scrub: 1,
        },
        yPercent:0,
    })

    gsap.set('.sc-plan .plan-item .title',{yPercent:150})
    gsap.to('.sc-plan .plan-item .title',{
        scrollTrigger: {
            trigger:".sc-plan .plan-item",
            start: `top bottom`,
            end: "50% top",
            scrub: 1,
        },
        yPercent:0
    })

    gsap.set('.sc-plan .plan-item .text',{yPercent:100, opacity:0})
    gsap.to('.sc-plan .plan-item .text',{
        scrollTrigger: {
            trigger:".sc-plan .plan-item",
            start: `top bottom`,
            end: "bottom top",
            scrub: 1,
        },
        yPercent:0,
        opacity:1,
    })

    gsap.to('.sc-history .text-area',{
        scrollTrigger: {
            trigger:".sc-history .group-photo",
            start: `top top`,
            end: "+=100%",
            scrub: 1,
            pin:true,
        },
        top:'-100%'
    })
    
    gsap.set('.sc-contact span',{yPercent:100})
    gsap.to('.sc-contact span',{
        scrollTrigger: {
            trigger:".sc-contact",
            start: `top bottom`,
            end: "bottom bottom",
            scrub: 1,
        },
        yPercent:0,
        stagger:0.1
    })

    gsap.to('.sc-info .bg',{
        scrollTrigger: {
            trigger:".sc-info",
            start: `top 50%`,
            end: "bottom top",
        },
        width: 0,
        duration:1
    })

})





