module.exports = {
    params: {
        designator: 'S',
        from: undefined,
        to: undefined,
        passthrough: false,
    },
    body: p => {
        return `
        (module Cherry_ULP_SMD (layer F.Cu) (tedit 5DD4F656)
        ${p.at /* parametric position */}
  
        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 -7.5) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value "Cherry_ULP_SMD" (at 0 0) (layer F.Fab) hide (effects (font (size 1 1) (thickness 0.15))))
  
        ${'' /* outline rectangle */}
        (fp_rect (start -7.1 -6.4) (end 7.1 6.4) (layer Dwgs.User) (width 0.15))
        (fp_rect (start -3.6 -1.8) (end 3.6 1.8) (layer Dwgs.User) (width 0.15))
  
        ${'' /* passthrough hole (non-plated) */}
        ${p.passthrough ? `
            (pad 1 thru_hole circle (at -2 -4.5 ${p.r}) (size 1.5 1.5) (drill 1.0) (layers *.Cu *.Mask) ${p.from})
            (pad 2 thru_hole circle (at 2 -4.5 ${p.r}) (size 1.5 1.5) (drill 1.0) (layers *.Cu *.Mask) ${p.to})
            ` : ''}

        ${'' /* SMD pads */}
        (pad 1 smd rect (at -0.65 2.3 ${p.r}) (size 0.7 3.25) (layers F.Cu F.Paste F.Mask) ${p.from})
        (pad 2 smd rect (at 1.8 2.3 ${p.r}) (size 0.7 3.25) (layers F.Cu F.Paste F.Mask) ${p.to})

        ${'' /* Courtyard, can't get this working. Investigate later
            
            (fp_rect (start -6.8 -6.1) (end 6.8 6.1) (layer F.Courtyard) (width 0.15))
            
            */}
        

        ${'' /** top left pad */}
        (pad 3 smd rect (at -6.2 -3.9 ${p.r}) (size 1.5 3.5) (layers F.Cu F.Paste F.Mask))
        ${'' /** bottom left pad */}
        (pad 3 smd rect (at -6.2 4.5 ${p.r}) (size 1.5 3.0) (layers F.Cu F.Paste F.Mask))
        ${'' /** bottom right pad */}
        (pad 3 smd rect (at 6.2 -5.025 ${p.r}) (size 1.5 1.5) (layers F.Cu F.Paste F.Mask))
        ${'' /** middle right pad */}
        (pad 3 smd rect (at 6.2 0 ${p.r}) (size 1.5 2.5) (layers F.Cu F.Paste F.Mask))
        ${'' /** top right pad */}
        (pad 3 smd rect (at 6.2 5.025 ${p.r}) (size 1.5 1.5) (layers F.Cu F.Paste F.Mask))
  
        ${'' /* Mechanical holes*/}
        (pad "" np_thru_hole circle (at -5.8 1.2) (size 1.5 1.5) (drill 1.2) (layers *.Cu *.Mask))
        (pad "" np_thru_hole circle (at 5.8 -3.26) (size 1.5 1.5) (drill 1.2) (layers *.Cu *.Mask))
        (pad "" np_thru_hole circle (at 5.8 3.26) (size 1.5 1.5) (drill 1.2) (layers *.Cu *.Mask))
        )
      `;
    }
};