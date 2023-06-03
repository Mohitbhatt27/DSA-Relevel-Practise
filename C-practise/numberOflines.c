#include <stdio.h>

int main () {

    FILE *fp1;

    fp1 = fopen ("f1.dat", "r");
    if (fp1 == NULL) {
        printf ("Error opening input file\n");
        exit (0);
    }

    int numberOfLines = 0;
    char ch;
    while ((ch = getc(fp1)) != EOF) {
        if (ch == '\n') {
            numberOfLines++;
        }
    }

    printf ("Number of lines in the file is %d", numberOfLines);
    fclose (fp1);

    return 0;

}