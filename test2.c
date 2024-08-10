#include<stdio.h>
#include<conio.h>
#include<math.h>
void main()
{
    int x1,y1,x2,y2,r,pc;
    printf("Enter the Coordinates: ");
    scanf("%d %d",&x1,&y1);
    printf("Enter the Searching Points: ");
    scanf("%d %d",&x2,&y2);
    printf("Enter the Radius: ");
    scanf("%d",&r);
    pc=sqrt(pow(x2-x1,2)+pow(y2-y1,2));
    if(pc>r)
    {
        printf("\n Points lies Outside the Circle");
    }
    else if(pc<r)
    {
        printf("\n Points lies Inside the Circle");
    }
    else if(pc==r)
    {
        printf("\n Points lies on the Circle");
    }
    else
    {
        printf("\n Wrong Entry");
    }
}
    
