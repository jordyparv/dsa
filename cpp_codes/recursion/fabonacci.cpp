#include<bits/stdc++.h>
using namespace std;

int fab(int n){
    if(n<=1)
    return n;
    return fab(n-1)+fab(n-2);
}
int main(){
    int n=9;
    vector<int>v;
    int i=0;
    while(i<=n)
    {
        v.push_back(fab(i));
        i++;
    }
    for(auto it:v)
        cout<<it<<" ";
    
}

// int f = 0;
    // int l = 1;
    // int c = 0;
    // cout<<f<<" "<<l<<" ";
    // for(int i=2;i<=n;i++){
        
    //     c = l + f;
	// 	f = l;
	// 	l = c;
	// 	cout << c << " ";
    // }