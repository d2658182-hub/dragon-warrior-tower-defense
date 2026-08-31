(function() {
	cc.Button.prototype.audioId = 104, cc.Button.prototype._onTouchEnded = function(t) {
		this.interactable && this.enabledInHierarchy && (this._pressed && (cc.Component.EventHandler.emitEvents(this.clickEvents, t), this.node.emit("click", this), cc._gameManager && cc._gameManager.audio.playAudio(this.audioId)), this._pressed = !1, this._updateState(), t.stopPropagation())
	};
	var t = new cc.Vec3,
		e = new cc.Vec3,
		i = cc.mat4();
	cc.Node.prototype._hitTest = function(n, a) {
		var c = this._contentSize.width,
			o = this._contentSize.height,
			r = t,
			s = e,
			h = this.getComponent(cc.Button);
		h && h._pressed && h.zoomScale < 1 && (c /= h.zoomScale, o /= h.zoomScale);
		var d = cc.Camera.findCamera(this);
		if (d ? d.getScreenToWorldPoint(n, r) : r.set(n), this._updateWorldMatrix(), !cc.Mat4.invert(i, this._worldMatrix)) return !1;
		cc.Vec2.transformMat4(s, r, i), s.x += this._anchorPoint.x * c, s.y += this._anchorPoint.y * o;
		var p = !1;
		if (s.x >= 0 && s.y >= 0 && s.x <= c && s.y <= o && (p = !0, a && a.mask))
			for (var l = a.mask, m = this, _ = l ? l.length : 0, u = 0, f = 0; m && f < _; ++u, m = m.parent) {
				var g = l[f];
				if (u === g.index) {
					if (m !== g.node) {
						l.length = f;
						break
					}
					var v = m.getComponent(cc.Mask);
					if (v && v._enabled && !v._hitTest(r)) {
						p = !1;
						break
					}
					f++
				} else if (u > g.index) {
					l.length = f;
					break
				}
			}
		return p
	}
})();