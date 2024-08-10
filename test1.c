#include<stdio.h>
#include<conio.h>
void main()
{
    int side1,side2,side3;
    printf("Enter the Sides: ");
    scanf("%d %d %d", &side1, &side2, &side3);
    if((side1+side2>side3)||(side1+side3>side2)||(side2+side3>side1))
    {
        printf("\n Triangle is Vaild");
    }
    else
    {
        printf("\n Invaild Triangle");
    }
}