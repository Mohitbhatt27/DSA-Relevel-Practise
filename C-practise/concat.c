#include <stdio.h>
#include <string.h>

int main() {
    char str1[100], str2[100];
    printf("\nEnter the first string: ");
    gets(str1);
    printf("\nEnter the second string: ");
    gets(str2);
    
    char res[200];
    int i = 0; int j = 0;
    while (str1[i]!='\0'){
        res[j] = str1[i];
        i++;
        j++;
    }

    i = 0; 
    while (str2[i]!='\0'){
        res[j] = str2[i];
        i++;
        j++;
    }

    printf("\nThe concatenated string is: %s", res);

    return 0;
}