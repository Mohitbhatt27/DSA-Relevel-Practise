#include <stdio.h>
#define MAX

int main (){
    int a,b,c;
    scanf ("%d",&a);
    scanf ("%d",&b);
    scanf ("%d",&c);
    return 0;

    #ifdef MAX {
        if (a>b && a>c) {
            printf ("a is max")
        }
        else if (b>a && b>c) {
            printf ("b is max")
        }
        else {
            printf ("c is max")
        }
    }
    #endif
}