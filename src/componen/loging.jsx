import React, { useState } from "react";
import "./loging.css"

class Loging extends React.Component {
    state = {
        name: " ",
        categoria: " ",
        gender: " ",
        alamat: " ",
        member: false
    }

    hendelFrom = (e) => {
        e.preventDefault();
        alert(`
        name : ${this.state.name}
        categoria : ${this.state.categoria}
        gender : ${this.state.gender}
        alamat : ${this.state.alamat}
        member : ${this.state.member ? "Yes" : "No"}
        `
        )
        this.setState({
            name: " ",
            categoria: " ",
            gender: " ",
            alamat: " ",
            member: false
        })
    }

    render() {
        return (
            <div className="form">
                <form onSubmit={this.hendelFrom}>
                    <label>
                        Name :<br />
                        <input type="text" id="name" name="name" onChange={(e) => this.setState({ name: e.target.value })}
                            defaultValue={this.state.name} />
                    </label><br />

                    <label>
                        Jurusan :<br />
                        <select id="Jurusan" name="categoria" onChange={(e) => this.setState({ categoria: e.target.value })}>
                            <option value="none" selected>Pilih jurusan</option>
                            <option value="Ipa">Ipa</option>
                            <option value="Ips">Ips</option>
                            <option value="TKJ">TKJ</option>
                            <option value="Multi Media">Multi Media</option>
                        </select>
                    </label><br />
                    <label>
                        Gender :<br />
                        <input type="radio" id="man" value="Man" name="gender" onChange={(e) => this.setState({ gender: e.target.value })} />
                        Man
                        <input type="radio" id="woman" value="Woman" name="gender" onChange={(e) => this.setState({ gender: e.target.value })} />
                        Woman
                    </label><br />
                    <label>
                        Alamat :<textarea id="alamat" name="alamat" onChange={(e) => this.setState({ alamat: e.target.value })} defaultValue={this.state.alamat} />
                    </label><br />
                    <label>
                        Member : <input type="checkbox" checked={this.state.member} name="member"
                            onClick={(e) => this.setState({ member: e.target.checked }, () => console.log(this.state))} />
                    </label><br />

                    <button>Daftar</button>
                </form>
            </div>
        )
    }
}

export default Loging;