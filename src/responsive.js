export const responsive={
    heading:{
        Main:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100;
            let style={
                height:`${9*height}px`,
                width:`${100*width}px`,
                backgroundColor:'black',
                position:'fixed',
                zIndex:'1'
            }
            return style;
        },
        image:function(img){
            let width=window.innerWidth/100,height=window.innerHeight/100;
            let style={
                position:'relative',
                height:`${7*height}px`,
                top:`${2*height}px`,
                left:`${1*width}px`,
                width:`${5*width}px`,
                backgroundImage:`url(${img})`,
                backgroundSize:`${4*width}px ${5*height}px`,
                backgroundRepeat:'no-repeat no-repeat'
            }
            return style
        },
        text:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100;
            let style={
                height:`${5*height}px`,
                float:'left',
                width:`${10*width}px`,
                backgroundColor:'black',
                color:'wheat',
                position:'relative',
                bottom:`${2.5*height}px`,
                left:`${6*width}px`,
                fontSize:`${Math.min(2*height,2*width)}px`
            }
            return style;
        }
    },
    snake:{
        header:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100;
            let style={
                height:`${40*height}px`,
                width:`${60*width}px`,
                backgroundColor:'transparent',
                border:`${Math.min(0.1*height,0.1*width)}px solid grey`,
                color:'grey',
                position:'relative',
               top:`${15*height}px`,
                left:`${25*width}px`,
                fontSize:`${Math.min(2*height,2*width)}px`,
                marginBottom:`${15*height}px`,
                boxShadow:'0px 2px 10px'
            }
            return style;
        },
        image:function(img){
            let width=window.innerWidth/100,height=window.innerHeight/100;
            let style={
                height:`${30*height}px`,
                width:`${10*width}px`,
                backgroundImage:`url(${img})`,
                backgroundSize:`${10*width}px ${30*height}px`,
                color:'grey',
                position:'relative',
                top:`${4*height}px`,
                left:`${3*width}px`
            }
            return style;
        },
        text:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100;
            let style={
                float:'left',
                height:`${30*height}px`,
                width:`${40*width}px`,
                backgroundColor:'transparent',
                position:'relative',
                color:"grey",
                fontSize:`${Math.min(2*height,2*width)}px`,
                left:`${15*width}px`,
                bottom:`${30*height}px`
            }
            return style
        },
        text_02:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100;
            let style={
                float:'left',
                backgroundColor:'transparent',
                position:'relative',
                color:"grey",
                fontSize:`${Math.min(2*height,2*width)}px`,
                height:`${25*height}px`,
                width:`${40*width}px`,
                border:'transparent'
            }
            return style
        }
    },
    footer:{
        header:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100;
            let style={
                position:'relative',
                top:`${20*height}px`,
                height:`${40*height}px`,
                width:`${100*width}px`,
                border:`${Math.min(0.1*height,0.1*width)}px solid grey`,
                backgroundColor:'darkgrey',
                zIndex:'2'
            }
            return style;
        },
        text:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100;
            let style={
                position:'relative',
                height:`${40*height}px`,
                width:`${100*width}px`,
                border:`${Math.min(0.1*height,0.1*width)}px solid grey`,
                backgroundColor:'#0d0b0b'
            }
            return style;
        }
    },
    side_bar:{
        Main:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100;
            let style={
                height:`${100*height}px`,
                width:`${10*width}px`,
                position:'fixed',
                zIndex:'1',
                top:`${8*height}px`,
                border:`${Math.min(0.1*height,0.1*width)}px solid grey`,
                backgroundColor:'rgb(32,29,29',
                boxShadow:'0px 2px 10px grey'
            }
            return style
        },
        block:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100;
            let style={
                height:`${10*height}px`,
                width:`${10*width}px`,
                position:'relative',
                backgroundColor:'#transparent',
                border:`${Math.min(0.1*height,0.1*width)}px solid grey`,
                boxShadow:'0px 2px 10px '

            }
            return style
        },
        image:function(img){
            let width=window.innerWidth/100,height=window.innerHeight/100;
            let style={
                height:`${6*height}px`,
                width:`${4*width}px`,
                position:'relative',
                backgroundImage:`url(${img})`,
                backgroundSize:`${4*width}px ${6*height}px`,
                top:`${1.5*height}px`
              
            }
            return style
        },
        text:function(){
            let width=window.innerWidth/100,height=window.innerHeight/100;
            let style={
            height:`${8*height}px`,
            width:`${10*width}px`,
            position:'relative',
            fontSize:`${Math.min(1.5*height,1.5*width)}px`,
            color:'white',
            left:`${4*width}px`,
            bottom:`${2*height}px`,
        }
        return style
        }
    }
  
}