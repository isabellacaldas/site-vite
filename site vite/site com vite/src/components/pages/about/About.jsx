import React from 'react'

import './about.css'

import logo from '../../../assets/logo.png'

const About = () => {
  return (
    <>
      <section className='about'>
        {/*<img src={logo} alt="logo" />*/}
        <div className="container flex mtop">
          <div className='left row'>
            <h3>Quem somos?</h3>

            <p>O Instituto Sumaúma, é uma organização da sociedade civil, 
            com responsabilidade jurídica de direito privado, sem fins 
            econômicos, com prazo de duração indeterminado, voltado para 
            o desenvolvimento de atividades de interesse público e relevância 
            socioeducacional, ambiental e cultural, fundamentado na defesa. 
            preservação e conservação do meio ambiente e promoção do desenvolvimento 
            sustentável, na busca pela solidariedade, no bem estar e melhoria continua 
            da qualidade de vida dos indivíduos.</p>
            <br />
            <h3>Missão</h3>
            <p>Promover a valorização e conversação dos remanencentes florestais 
              urbanos e implementar ações alternativas de uso público com fins educativos, 
              recreativos culturais e pesquisas científicas.</p>
          </div>
        </div>

      </section>
    </>
  )
}

export default About