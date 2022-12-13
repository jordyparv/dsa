#include<bits/stdc++.h>
using namespace std;
int main(){

    int n = 54124;

    //cout<<to_string(n).length();
    //cout<<(int)log10(n)+1;
    int cnt = 0;
    while(n!=0){
        n/=10;
        cnt++;
    }
    cout<<cnt;
    
}