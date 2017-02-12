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
		dl=[1,2,3,4,5,6,,8,9,0],
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
	
	pp.ez_35=crack(pp,'ez_35',cl,'command');
	l(pp)
	pp.digit=crack(pp,'digit',dl,'digit');
	l(pp);
	
	return { ok:false,msg:std.get_log() };
}
