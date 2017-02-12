function(context, args)
{
	var std  = #s.scripts.lib(),
		t = args.target,
		stat,
		l = x=>std.log(x),
		no = 0,
		c,
		pp={},
		p1,o,i=0,
		cl = ['open','unlock','release'],
		cll = ['yellow','orange','green','red','purple','magenta','blue','cyan','lime'],
		dl=[1,2,3,4,5,6,7,8,9,0],
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
				let line = o.split('\n')[no+1];
				
				if(!line) {return};
				
				if(line.indexOf(s)<0){
					p[pname]=c;
					return c
				}
			}
		};
	
	for(let i=2;i<100;i++) {
		if(prime(i)) {pl.push(i)}
	}
	
	while(i<4) {
		stat = #s.rudykocur.test_lock({script:t, params:pp});
		if(!stat.ok) {
			l(stat);
			break
		}
		
		l('ttt:' + stat.lock);
		
		switch(stat.lock) {
			case 'EZ_21':
				crack(pp,'ez_21',cl,'command');
				no++;
				break;
			case 'EZ_35':
				crack(pp,'ez_35',cl,'command'); 
				crack(pp,'digit',dl,'digit');
				no++;
				break;
			case 'EZ_40':
				crack(pp,'ez_40',cl,'command');
				crack(pp,'ez_prime',pl,'prime');
				no++;
				break;
			case 'c001':
				crack(pp,'c001',cll,'name');
				crack(pp,'color_digit',dl, 'digit');
				no++;
				break;
		
			case 'c002':
				crack(pp,'c002', cll, 'correct');
				crack(pp,'c002_complement', cll, 'complement');
				no++;
				break;
		
			case 'c003':
				crack(pp,'c003',cll, 'correct');
				crack(pp,'c003_triad_1', cll, 'first');
				crack(pp,'c003_triad_2', cll, 'second');
				no++;
				break;
		}
		l(pp);
		l("");
		i++;
	}
	
	return { ok:false,msg:std.get_log() };
}
