function(context, args)
{
	var std  = #s.scripts.lib(),
		l = (x)=>{std.log(x)},
		no = args.line||0,
		t = args.target,
		r = t.call({}),c,
		pp=args.params||{},
		p1,o,
		cl = ['open','unlock','release'],
		crack = (p,pname,ls) => {
			for(c of ls) {
				p1=Object.assign({[pname]:c},p);
				o=t.call(p1);
				l('c '+c+' :: ' + o);
				if(o.split('\n')[no].indexOf('LOCK_UNLOCKED')>=0){
					return c
				}
			}
		};
	
	pp.ez_21=crack(pp,'ez_21',cl);
	l(pp);
	
	return { ok:false,msg:std.get_log() };
}
