#include<bits/stdc++.h>
using namespace std;
int main(){
    vector<int> v ={2 ,3,2 ,3 ,5};
    unordered_map<int,int> map;
    

    for(int i=0; i<v.size(); i++){
        map[v[i]]++;
    }

    for(int i=1; i<=*max_element(v.begin(),v.end()); i++){
        cout<<map[i]<<" ";
        }
    

return 0;
}