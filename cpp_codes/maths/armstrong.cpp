#include <bits/stdc++.h>
using namespace std;
int main(){
    int num = 170   ;
    int n = num;
    int arms = 0;
    int size  = floor(log10(n)+1);
    while (n!=0)
    {
        arms+=pow(n%10,size);
        n/=10;
    }

        if(arms==num)
            cout<<num<<" is armstrong";
        
        else cout<<num<<" is not armstrong";
    
}