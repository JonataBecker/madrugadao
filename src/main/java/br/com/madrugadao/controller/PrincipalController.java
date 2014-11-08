package br.com.madrugadao.controller;

import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Result;
import javax.inject.Inject;

/**
 *
 */
@Controller
public class PrincipalController {

    private final Result result;
    
    /**
     * CDI eyes only
     *
     * @deprecated
     */
    @Deprecated
    protected PrincipalController() {
        this(null);
    }

    @Inject
    public PrincipalController(Result result) {
        this.result = result;
    }
    
    @Get("/")
    public void index() {
    }

}
