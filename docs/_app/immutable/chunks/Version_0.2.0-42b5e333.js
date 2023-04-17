import{S as ln,i as un,s as rn,k as o,q as l,a as u,l as p,m as c,r as i,h as n,c as r,n as ls,b as t,G as e,B as Vs}from"./index-b0905f39.js";function kn(tn){let m,is,j,_,us,z,b,rs,A,E,ks,U,I,ms,W,L,P,ds,w,R,fs,hs,T,ws,Y,M,vs,N,k,F,ys,_s,S,bs,Es,V,Is,Ls,D,Ps,$,H,Ms,G,q,Hs,J,x,qs,O,d,xs,Bs,Cs,Q,B,Ks,X,v,en=`<code class="language-ts"><span class="token comment">// create a new model keywords that holds all of the keywords</span>
<span class="token comment">// with their id and connect them to movies that have that keyword</span>
model Keywords <span class="token punctuation">&#123;</span>
    id      Int     <span class="token decorator"><span class="token at operator">@</span><span class="token function">id</span></span> <span class="token decorator"><span class="token at operator">@</span><span class="token function">unique</span></span> @<span class="token keyword">default</span><span class="token punctuation">(</span><span class="token function">autoincrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    keyword String
    movie   Movie<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// connect the Keyword model to the Movie model</span>
model Movie <span class="token punctuation">&#123;</span>
    <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span>
    keywords    Keywords<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">&#125;</span></code>`,Z,C,Rs,g,y,on=`<code class="language-ts"><span class="token comment">// first we query the keywords a user has liked like the following</span>
<span class="token keyword">const</span> movies <span class="token operator">=</span> <span class="token keyword">await</span> database<span class="token punctuation">.</span>movie<span class="token punctuation">.</span><span class="token function">findMany</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
    where<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        likes<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
            some<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
                id<span class="token operator">:</span> userId
            <span class="token punctuation">&#125;</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    include<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        keywords<span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// push the ids of the keywords into the keywords array</span>
movies<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>movie <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    movie<span class="token punctuation">.</span>keywors<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>keyword <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
        keywords<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>keyword<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// this part sorts the pushes the keywords into the keywordsList</span>

keywords<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>keyword<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">let</span> existing <span class="token operator">=</span> genresList<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token operator">=></span> r<span class="token punctuation">.</span>id <span class="token operator">===</span> keyword<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>existing<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	    existing<span class="token punctuation">.</span>occurrences<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
	    keywordsList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> id<span class="token operator">:</span> keyword<span class="token punctuation">,</span> occurrences<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// this creates an array like this:</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
        id<span class="token operator">:</span> <span class="token string">'421'</span><span class="token punctuation">,</span>
        occurrences<span class="token operator">:</span> <span class="token number">3</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span>

<span class="token comment">// now the keywords need to be sorted based on decending occurences</span>
<span class="token comment">// then we slice the array to the first 3 keywords</span>
<span class="token comment">// after that we map the ids into an string seperated by commas</span>
<span class="token keyword">let</span> keywordString <span class="token operator">=</span> topKeywords<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token operator">=></span> t<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// this string is being put into the url that we are fetching</span>
<span class="token comment">// as "with_keywords"</span>
<span class="token comment">// this is our final url</span>
<span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>
	<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">https://api.themoviedb.org/3/discover/movie?api_key=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">TMDB_API_KEY</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">&amp;language=en-US&amp;sort_by=popularity.desc&amp;include_adult=false&amp;include_video=false&amp;with_runtime.gte=75&amp;with_keywords=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>keywordString<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// now we need to filter out the movies that the user already</span>
<span class="token comment">// knows from the results</span>
recommendedMovies <span class="token operator">=</span> recommendedMovies<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>movie<span class="token operator">:</span> <span class="token punctuation">&#123;</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">!</span>liked_movies<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token operator">=></span> f<span class="token punctuation">.</span>id <span class="token operator">===</span> movie<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// we also filter out the movies that have less than 100 votes</span>
<span class="token comment">// since the database contains a lot of weird short films</span>
recommendedMovies <span class="token operator">=</span> recommendedMovies<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>movie<span class="token operator">:</span> <span class="token punctuation">&#123;</span>vote_count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token operator">=></span> movie<span class="token punctuation">.</span>vote_count <span class="token operator">></span> <span class="token number">100</span><span class="token punctuation">)</span>

<span class="token comment">// that pretty much sums up how you get the individual recommendations</span></code>`,ss,ns,as,ts,es,f,Ts,os,K,Fs;return{c(){m=o("h1"),is=l("Recommendations"),j=u(),_=o("h2"),us=l("Description"),z=u(),b=o("p"),rs=l("In Version 0.2.0 personal recommendations are added, the user will get individualized recommendations for him based on his own interests. You can find them on the profile/recommended path!"),A=u(),E=o("h2"),ks=l("Changes"),U=u(),I=o("p"),ms=l("The following changes and implementations have been made in that version of the project:"),W=u(),L=o("ul"),P=o("li"),ds=l("Big changes to the database"),w=o("ul"),R=o("li"),fs=l("New model “Keywords”"),hs=u(),T=o("li"),ws=l("If a movie gets liked, the keywords are added to the movie"),Y=u(),M=o("p"),vs=l("How do we get the recommended movies?"),N=u(),k=o("ul"),F=o("li"),ys=l("When visiting the page, all keywords are queried that the user liked"),_s=u(),S=o("li"),bs=l("From those keywords, the top 3 keywords are evaluated based on frequency"),Es=u(),V=o("li"),Is=l("With these keywords an API request is sent to TheMovieDB which returns movies with these keywords"),Ls=u(),D=o("li"),Ps=l("From the response, the movies that the user has liked are filtered out"),$=u(),H=o("h2"),Ms=l("Features"),G=u(),q=o("p"),Hs=l("✅ Individualized recommendations ✨🎁"),J=u(),x=o("h2"),qs=l("Code"),O=u(),d=o("p"),xs=l("In order to include the recommendations we needed some big changes under the hood."),Bs=o("br"),Cs=l(`
Here are some of them.`),Q=u(),B=o("p"),Ks=l("schema.prisma"),X=u(),v=o("pre"),Z=u(),C=o("p"),Rs=l("profile/recommended/+page.server.ts"),g=u(),y=o("pre"),ss=u(),ns=o("hr"),as=u(),ts=o("br"),es=l(`
Commit: `),f=o("a"),Ts=l("Version 0.2.0"),os=u(),K=o("p"),Fs=l("Published: 2023-04-03"),this.h()},l(s){m=p(s,"H1",{});var a=c(m);is=i(a,"Recommendations"),a.forEach(n),j=r(s),_=p(s,"H2",{});var Ds=c(_);us=i(Ds,"Description"),Ds.forEach(n),z=r(s),b=p(s,"P",{});var js=c(b);rs=i(js,"In Version 0.2.0 personal recommendations are added, the user will get individualized recommendations for him based on his own interests. You can find them on the profile/recommended path!"),js.forEach(n),A=r(s),E=p(s,"H2",{});var zs=c(E);ks=i(zs,"Changes"),zs.forEach(n),U=r(s),I=p(s,"P",{});var As=c(I);ms=i(As,"The following changes and implementations have been made in that version of the project:"),As.forEach(n),W=r(s),L=p(s,"UL",{});var Us=c(L);P=p(Us,"LI",{});var Ss=c(P);ds=i(Ss,"Big changes to the database"),w=p(Ss,"UL",{});var ps=c(w);R=p(ps,"LI",{});var Ws=c(R);fs=i(Ws,"New model “Keywords”"),Ws.forEach(n),hs=r(ps),T=p(ps,"LI",{});var Ys=c(T);ws=i(Ys,"If a movie gets liked, the keywords are added to the movie"),Ys.forEach(n),ps.forEach(n),Ss.forEach(n),Us.forEach(n),Y=r(s),M=p(s,"P",{});var Ns=c(M);vs=i(Ns,"How do we get the recommended movies?"),Ns.forEach(n),N=r(s),k=p(s,"UL",{});var h=c(k);F=p(h,"LI",{});var $s=c(F);ys=i($s,"When visiting the page, all keywords are queried that the user liked"),$s.forEach(n),_s=r(h),S=p(h,"LI",{});var Gs=c(S);bs=i(Gs,"From those keywords, the top 3 keywords are evaluated based on frequency"),Gs.forEach(n),Es=r(h),V=p(h,"LI",{});var Js=c(V);Is=i(Js,"With these keywords an API request is sent to TheMovieDB which returns movies with these keywords"),Js.forEach(n),Ls=r(h),D=p(h,"LI",{});var Os=c(D);Ps=i(Os,"From the response, the movies that the user has liked are filtered out"),Os.forEach(n),h.forEach(n),$=r(s),H=p(s,"H2",{});var Qs=c(H);Ms=i(Qs,"Features"),Qs.forEach(n),G=r(s),q=p(s,"P",{});var Xs=c(q);Hs=i(Xs,"✅ Individualized recommendations ✨🎁"),Xs.forEach(n),J=r(s),x=p(s,"H2",{});var Zs=c(x);qs=i(Zs,"Code"),Zs.forEach(n),O=r(s),d=p(s,"P",{});var cs=c(d);xs=i(cs,"In order to include the recommendations we needed some big changes under the hood."),Bs=p(cs,"BR",{}),Cs=i(cs,`
Here are some of them.`),cs.forEach(n),Q=r(s),B=p(s,"P",{});var gs=c(B);Ks=i(gs,"schema.prisma"),gs.forEach(n),X=r(s),v=p(s,"PRE",{class:!0});var pn=c(v);pn.forEach(n),Z=r(s),C=p(s,"P",{});var sn=c(C);Rs=i(sn,"profile/recommended/+page.server.ts"),sn.forEach(n),g=r(s),y=p(s,"PRE",{class:!0});var cn=c(y);cn.forEach(n),ss=r(s),ns=p(s,"HR",{}),as=r(s),ts=p(s,"BR",{}),es=i(s,`
Commit: `),f=p(s,"A",{href:!0,target:!0});var nn=c(f);Ts=i(nn,"Version 0.2.0"),nn.forEach(n),os=r(s),K=p(s,"P",{});var an=c(K);Fs=i(an,"Published: 2023-04-03"),an.forEach(n),this.h()},h(){ls(v,"class","language-ts"),ls(y,"class","language-ts"),ls(f,"href","https://github.com/hartmann-jonas/movie-db-two/commit/951a804edac393080bdcddab50066ee9ea9ec0c6"),ls(f,"target","_blank")},m(s,a){t(s,m,a),e(m,is),t(s,j,a),t(s,_,a),e(_,us),t(s,z,a),t(s,b,a),e(b,rs),t(s,A,a),t(s,E,a),e(E,ks),t(s,U,a),t(s,I,a),e(I,ms),t(s,W,a),t(s,L,a),e(L,P),e(P,ds),e(P,w),e(w,R),e(R,fs),e(w,hs),e(w,T),e(T,ws),t(s,Y,a),t(s,M,a),e(M,vs),t(s,N,a),t(s,k,a),e(k,F),e(F,ys),e(k,_s),e(k,S),e(S,bs),e(k,Es),e(k,V),e(V,Is),e(k,Ls),e(k,D),e(D,Ps),t(s,$,a),t(s,H,a),e(H,Ms),t(s,G,a),t(s,q,a),e(q,Hs),t(s,J,a),t(s,x,a),e(x,qs),t(s,O,a),t(s,d,a),e(d,xs),e(d,Bs),e(d,Cs),t(s,Q,a),t(s,B,a),e(B,Ks),t(s,X,a),t(s,v,a),v.innerHTML=en,t(s,Z,a),t(s,C,a),e(C,Rs),t(s,g,a),t(s,y,a),y.innerHTML=on,t(s,ss,a),t(s,ns,a),t(s,as,a),t(s,ts,a),t(s,es,a),t(s,f,a),e(f,Ts),t(s,os,a),t(s,K,a),e(K,Fs)},p:Vs,i:Vs,o:Vs,d(s){s&&n(m),s&&n(j),s&&n(_),s&&n(z),s&&n(b),s&&n(A),s&&n(E),s&&n(U),s&&n(I),s&&n(W),s&&n(L),s&&n(Y),s&&n(M),s&&n(N),s&&n(k),s&&n($),s&&n(H),s&&n(G),s&&n(q),s&&n(J),s&&n(x),s&&n(O),s&&n(d),s&&n(Q),s&&n(B),s&&n(X),s&&n(v),s&&n(Z),s&&n(C),s&&n(g),s&&n(y),s&&n(ss),s&&n(ns),s&&n(as),s&&n(ts),s&&n(es),s&&n(f),s&&n(os),s&&n(K)}}}const dn={title:"Version 0.2.0",date:"2023-04-03"};class fn extends ln{constructor(m){super(),un(this,m,null,kn,rn,{})}}export{fn as default,dn as metadata};
