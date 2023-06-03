#include <stdio.h>
#include <string.h>

void reverse (char *str) {
    int len = strlen(str);
    char *startPtr = str;
    char *endPtr = str + len - 1;

    while (startPtr < endPtr) {
        char temp = *startPtr;
        *startPtr = *endPtr;
        *endPtr = temp;
        startPtr++;
        endPtr--;
    }
}

void palindrome (char *str) {
    int len = strlen(str);
    char *startPtr = str;
    char *endPtr = str + len - 1;

    while (startPtr < endPtr) {
        if (*startPtr != *endPtr){
            printf ("NOT A PALINDROME");
            break;
            return;
        }
        startPtr++;
        endPtr--;
    }

    printf ("IS A PALINDROME");
}

int main () {
    char str[100];
    scanf ("%s",str);
    printf ("original string is %s", str);
    reverse (str);
    printf ("new String is %s", str);

    palindrome (str);
    return  0;
}