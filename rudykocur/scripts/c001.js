function(context, args)
{
	var std  = #s.scripts.lib(),
		l = (x)=>{std.log(x)},
		no = args.lock||0,
		t = args.target,
		r = t.call({}),c,
		pp=args.params||{},
		p1,o,
		cl = ['yellow','orange','green','red','purple','magenta','blue','cyan','lime'],
		dl = [1,2,3,4,5,6,7,8,9,0],
		crack = (p,pname,ls,s) => {
			for(c of ls) {
				p1=Object.assign({[pname]:c},p);
				o=t.call(p1);
				l('c '+c+' :: ' + o);
				l(p1);
				l(o.split('\n')[no+1]);
				if(o.split('\n')[no+1].indexOf(s)<0){
					return c
				}
			}
		};
	
	pp.c001=crack(pp,'c001',cl,'name');
	pp.color_digit=crack(pp,'color_digit',dl, 'digit');
	
	l(pp);
	
	return { ok:false,msg:std.get_log() };
}
