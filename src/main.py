


def preload():
    pass
def setup():
    canvas = createCanvas(400,400);
    
def draw():
    initialWidth: int = 200;
    initialHeight: int = 15;
    diameter: int = 30;
    x=0
    for i in range(2):
        rect(100,90+x,initialWidth,initialHeight)
        circle(100,100+x,30)
        circle(100+initialWidth,100+x,30)
        x = 30
    for i in range(2):
        rect(100,90,initialHeight,initialWidth)
        rect(100+initialWidth,initialHeight,initialWidth)