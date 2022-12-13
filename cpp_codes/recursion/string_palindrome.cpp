#include<bits/stdc++.h>
using namespace std;
string  reverseStr(string str,int size,int s=0){
    if(s<size/2){
     swap(str[s],str[size-s]);
        reverseStr(str,size,s+1);
    }
    return str;
}
int main(){
    string str = "aba";
    string revStr = reverseStr(str,str.length()-1);
    if(str==revStr){
        cout<<str<<" string is palindrome";
    }
    else cout<<str<<" string is not palindrome";
}
