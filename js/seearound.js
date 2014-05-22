(function($) {

    $.fn.seearound = function() {

        this.each(function(i, v) {
            var $this = $(v);
            var funny = false;
            var img_split = $this.attr('src').split('.');
            var img_extension = img_split.pop();
            var img_name = img_split.join('.');
            var images = {
                'front': img_name + '.' + img_extension,
                'top_right': img_name + '_top_right.' + img_extension,
                'top': img_name + '_top.' + img_extension,
                'top_left': img_name + '_top_left.' + img_extension,
                'left': img_name + '_left.' + img_extension,
                'bottom_left': img_name + '_bottom_left.' + img_extension,
                'bottom': img_name + '_bottom.' + img_extension,
                'bottom_right': img_name + '_bottom_right.' + img_extension,
                'right': img_name + '_right.' + img_extension,
                'fun': img_name + '_fun.' + img_extension
            };
            $this.click(function(e){
                $this.attr('src', images.fun);
                $this.funny = true;

            })
            $(document).mousemove(function(e){
                if($this.funny == false){
                    var mousex = e.pageX;
                    var mousey = e.pageY;

                    var xi = $this.offset().left + ($this.width() / 2);
                    var yi = $this.offset().top + ($this.height() / 2);

                    var cuadroxi = $this.offset().left;
                    var cuadroxf = cuadroxi + $this.width();
                    var cuadroyi = $this.offset().top;
                    var cuadroyf = cuadroyi + $this.height();

                    var xf = mousex - xi;
                    var yf = yi - mousey;

                    var angle = Math.atan2(yf, xf) * (180 / Math.PI);

                    if(mousex >= cuadroxi && mousex <= cuadroxf && mousey >= cuadroyi && mousey <= cuadroyf){
                        $this.attr('src', images.front);
                    }else if((angle >= 0 && angle < 22.5) || (angle < 0 && angle >= -22.5)){
                        $this.attr('src', images.right);
                    }else if(angle >= 22.5 && angle < 67.5){
                        $this.attr('src', images.top_right);
                    }else if(angle >= 67.5 && angle < 112.5){
                        $this.attr('src', images.top);
                    }else if(angle >= 112.5 && angle < 157.5){
                        $this.attr('src', images.top_left);
                    }else if((angle >= 157.5 && angle <= 180) || (angle >= -180 && angle < -157.5)){
                        $this.attr('src', images.left);
                    }else if(angle >= -157.5 && angle < -112.5){
                        $this.attr('src', images.bottom_left);
                    }else if(angle >= -112.5 && angle < -67.5){
                        $this.attr('src', images.bottom);
                    }else if(angle >= -67.5 && angle < -22.5 ){
                        $this.attr('src', images.bottom_right);
                    }
                }
            })
            $(document).mouseout(function(e){
                $this.funny = false;
            })
        })
    }

}($));
