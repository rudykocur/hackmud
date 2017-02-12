function(context, args)
{
	var l  = #s.scripts.lib();
	var s = args.script;
	var out = s.call().split('\n'),
		cmds = out[out.length-1].split('|'),
		c1 = cmds[0].trim(),
		c2 = cmds[1].trim(),
		reg = /(?:developments on (\w[^ ]+\w) progress)|(?:date for ([^ ]+). )|(?:of project ([^ ]+) has)|(?:ook for (\w[^ ]+\w) in your)|(?:continues on ([^ ]+), hope)/g,
		match,
		cr = /[¡|¢|£|¤|¥|¦|§|¨|©|ª]/i,
		plist = [], pcount = 0, pkey, ck;
	
	out = s.call({});
	
	var c3 = out.substr(out.indexOf('--'));
	c3 = c3.substring(c3.indexOf('"')+1, c3.lastIndexOf('"'));
	ck = out.substr(out.indexOf('with ')+5);
	ck = ck.substring(0, ck.indexOf(':'));
	
	out = s.call({[ck]: c2});
	
	l.log(ck + ': ' + c1 + ', ' + c2 + ', ' + c3);
	
	var pass = out.substr(out.indexOf('this strategy ')+14);
	pass = pass.substring(0, pass.indexOf(' '));
	
	l.log('pass: ' + pass);
	
	for(let x of [ck, c1, c2, c3, pass]) {
		if (cr.test(x)) {
			return { ok:false,msg:l.get_log(), c:x }
		}
	}
	
	out = s.call({[ck]: c1});
	
	while ((match = reg.exec(out)) !== null) {
		let p = match[1] || match[2] || match[3] || match[4] || match[5];
		plist.push(p);
	}
	
	for(let p of plist) {
		// l.log('PROJECT: ' + p);
		if (cr.test(p)) {
			//l.log('  ... corrupted');
			continue;
		}
		
		if(!pkey) {
			for(let ptest of ['p', 'pass', 'password']) {
				out = s.call({[ck]: c3, [ptest]:pass, project: p});
				if(out.indexOf('No') < 0) {
					pkey = ptest;
					l.log('pkey: ' + pkey);
				}
			}
		}
		
		out = s.call({[ck]: c3, [pkey]:pass, project: p});
		for(let sn of out) {
			if (cr.test(sn)) {
				// l.log('  script corrupted: ' + sn);
				continue;
			}
			let lvl = #s.scripts.get_level({name: sn});
			if(lvl == "4") {
				//l.log('  script: ' + sn);
				l.log(sn);
				pcount++;
			}
		}
		
		if(pcount > 50) {
			break;
		}
	}
	
			
	return { ok:false,msg:l.get_log() };
}
