#include<bits/stdc++.h>
using namespace std;

int main(){
    // Initialize 
    pair <int, string> p = {2,"hello"};
    cout<<p.first<<" "<<p.second<<endl;
    // pair of pair
    pair < pair<int,int> ,pair<int,int>> pp = {{1,1},{2,2}};
    //
    cout<<pp.first.first<<" "<<pp.second.first<<endl;
    return 0;
}