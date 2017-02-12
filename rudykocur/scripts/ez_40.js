function(context, args)
{
	var std  = #s.scripts.lib(),
		l = (x)=>{std.log(x)},
		no = args.lock||0,
		t = args.target,
		r = t.call({}),c,
		pp=args.params||{},
		p1,o,
		cl = ['open','unlock','release'],
		pl=[], prime = (n) => {
			var q = Math.floor(Math.sqrt(n));
			for (var i = 2; i <= q; i++) {if (n % i == 0) return false;};
			return true;
		},
		crack = (p,pname,ls,s) => {
			for(c of ls) {
				p1=Object.assign({[pname]:c},p);
				o=t.call(p1);
				l('c '+c+' :: ' + o);
				if(o.split('\n')[no+1].indexOf(s)<0){
					return c
				}
			}
		};
	
	for(let i=2;i<100;i++) {
		if(prime(i)) {pl.push(i)}
	}
	
	pp.ez_40=crack(pp,'ez_40',cl,'command');
	l(pp)
	pp.ez_prime=crack(pp,'ez_prime',pl,'prime');
	l(pp);
	
	return { ok:false,msg:std.get_log() };
}
