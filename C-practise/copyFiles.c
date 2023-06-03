/*Program to copy one file to another */ 

#include <stdio.h>

main() {
    FILE * fp1;
    FILE * fp2;

    int ch;
    fp1 = fopen(“f1.dat”, ”r”);
    if (fp1 == NULL)

    {
        printf(“Error opening input file\ n”);
        exit(0);
    }
    
    fp2 = fopen(“f2.dat”, ”w”);
    if (fp2 == NULL) {
        printf(“Error opening output file\ n”);
        exit(0);
    }

    while ((ch = getc(fp1))! = EOF) {
        putc(ch, fp2);
    }
    fclose(fp1);
    fclose(fp2);
}