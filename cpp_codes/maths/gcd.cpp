#include<bits/stdc++.h>
using namespace std;
int main(){
    int n1 = 6;
    int n2 = 3;
    int gcd =0;
    int x = min(n1,n2); 

    for(int i=2;i<=x;i++)
    {
        if(n1%i==0 && n2%i==0)
            gcd = i;
    }
    cout<< "GCD "<<gcd;
}
