#include<bits/stdc++.h>
using namespace std;
int main(){
    int n = 54321;
    // int reverse = 0;
    // while(n!=0){
    //     reverse = (reverse * 10) + (n%10) ;
    //     n/=10;
    // }
    // cout<<reverse;
    string str = to_string(n);
    
    
    reverse(str.begin(),str.end());
    
    cout<<str<<endl;

}