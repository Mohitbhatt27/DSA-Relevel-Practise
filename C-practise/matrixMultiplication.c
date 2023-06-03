/*Program in C to multiply two 3X3 matrices*/

#include <stdio.h>

int main() {
    int a[3][3], b[3][3], c[3][3], i, j, k;

    printf("Enter the elements of matrix a:\n");
    for (i = 0; i <= 2; i++) {
        for (j = 0; j <= 2; j++) {
            scanf("%d", &a[i][j]);
        }
    }

    printf("Enter the elements of matrix b:\n");
    for (i = 0; i <= 2; i++) {
        for (j = 0; j <= 2; j++) {
            scanf("%d", &b[i][j]);
        }
    }

    printf("The product of the two matrices is:\n");
    for (i = 0; i <= 2; i++) {
        for (j = 0; j <= 2; j++) {
            c[i][j] = 0;
            for (k = 0; k <= 2; k++) {
                c[i][j] += a[i][k] * b[k][j];
            }
            printf("%d\t", c[i][j]);
        }
        printf("\n");
    }

    return 0;
}