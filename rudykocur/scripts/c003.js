function(context, args)
{
	var std  = #s.scripts.lib(),
		l = (x)=>{std.log(x)},
		t = args.target,
		r = t.call({}),
		pp=args.params||{},
		p1,o,
		cl = ['yellow','orange','green','red','purple','magenta','blue','cyan','lime'],
		crack = (p,pname) => {
			for(var c of cl) {
				p1=Object.assign({[pname]:c},p);
				o=t.call(p1);
				l('c '+c+' :: ' + o);
				if(o.indexOf('"'+c)<0){
					return c
				}
			}
		};
	
	pp.c003=crack(pp,'c003');
	//l('c1:'+c1);
	pp.c003_triad_1 = crack(pp,'c003_triad_1');
	// l('c2:'+c2);
	pp.c003_triad_2 = crack(pp,'c003_triad_2');
	l(pp);
	
	return { ok:false,msg:std.get_log() };
}
